import { useState, useRef, useEffect } from "react";

export default function ChatPage() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

const chatContainerRef = useRef(null);

  // auto scroll
useEffect(() => {
  const container = chatContainerRef.current;
  if (!container) return;

  container.scrollTop = container.scrollHeight;
}, [messages, loading]);

 const sendMessage = async (message) => {
  if (!message.trim()) return;

  setInput("");

  // 1. Add user message immediately
  setMessages((prev) => [
    ...prev,
    { role: "user", text: message },
    { role: "assistant", text: "" }, // 🔥 IMPORTANT PLACEHOLDER
  ]);

  setLoading(true);

  const res = await fetch("http://localhost:5000/api/chat-stream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const reader = res.body.getReader();
  const decoder = new TextDecoder("utf-8");

  let text = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split("\n");

    for (let line of lines) {
      if (line.startsWith("data: ")) {
        const json = line.replace("data: ", "");

        if (json.includes("[DONE]")) {
          setLoading(false);
          return;
        }

        try {
          const { token } = JSON.parse(json);

          if (token) {
            text += token;

            // 🔥 UPDATE LAST MESSAGE (assistant)
            setMessages((prev) => {
              const updated = [...prev];
              const lastIndex = updated.length - 1;

              updated[lastIndex] = {
                ...updated[lastIndex],
                text,
              };

              return updated;
            });
          }
        } catch (e) {
          // ignore bad chunks
        }
      }
    }
  }

  setLoading(false);
};
  return (
    <section  className="bg-slate-500   px-10 shadow-xl  py-10 h-auto" >
    <div className="  shadow-2xl px-10 rounded-3xl py-5   item   pt-5 gap-y-10  flex flex-col h-[85vh] max-w-3xl mx-auto p-4">
<h1 className="text-center text-[25px] bg-teal-600  px-4 w-auto py-1 text-white rounded-full  mx-auto  font-bold">Portfolio AI Assistant</h1>
      
      <p className="text-center text-white">Welcome to my portfolio assistant. You can explore my projects, technical skills, and experience by asking any questions about my work or development journey</p>{/* Me sages */}
      <div
  ref={chatContainerRef}
  className="flex-1 overflow-y-auto space-y-3 p-3"
>

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm shadow-md ${
                msg.role === "user"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl text-sm animate-pulse">
              AI is typing...
            </div>
          </div>
        )}

        <div ref={chatContainerRef} />
      </div>

      {/* Input box */}
    <div className="mx-auto flex gap-2 mt-3 w-full">
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Ask something..."
    className="flex-1 min-w-0 border p-3 rounded-xl outline-none"
  />

 <button
  onClick={() => sendMessage(input)}
  className="bg-green-950 text-white px-3 sm:px-5 py-3 rounded-xl"
>
  <span className="hidden sm:inline">Send</span>
  <span className="sm:hidden">➤</span>
</button>
</div>
    </div>
    </section>
  );
}