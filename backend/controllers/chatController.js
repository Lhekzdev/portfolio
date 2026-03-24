import { Chat } from "../models/chatModel.js";

export const ChatStream = async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    // 🔹 Find or create chat
    let chat = await Chat.findOne({ sessionId });

    if (!chat) {
      chat = new Chat({
        sessionId,
        messages: [],
      });
    }

    // 🔹 Save USER message
    chat.messages.push({
      role: "user",
      content: message,
    });

    const lastMessages = chat.messages
  .slice(-10)
  .map(msg => ({
    role: msg.role,
    content: msg.content
  }));

    // 🔥 CALL GROQ FIRST (before streaming)
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful AI assistant inside a developer portfolio.",
            },
            ...lastMessages,
          ],
          stream: true,
        }),
      }
    );

    // ✅ HANDLE ERROR BEFORE STREAMING
    if (!response.ok) {
  const errorText = await response.text();
  console.error("🔥 Groq REAL ERROR:", errorText);

  return res.status(response.status).json({
    error: errorText
  });
}

    if (!response.body) {
      return res.status(500).json({ error: "No response stream" });
    }

    // 🔥 START STREAMING AFTER SUCCESS
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders?.();

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let fullText = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split("\n");

      for (let line of lines) {
        if (line.startsWith("data: ")) {
          const json = line.replace("data: ", "");

          if (json === "[DONE]") {
            // 🔥 Save AI response
            chat.messages.push({
              role: "assistant",
              content: fullText,
            });

            chat.messages = chat.messages.slice(-20);

            await chat.save();

            res.write(`data: [DONE]\n\n`);
            res.end();
            return;
          }

          try {
            const parsed = JSON.parse(json);
            const token = parsed?.choices?.[0]?.delta?.content;

            if (token) {
              fullText += token;
              res.write(`data: ${JSON.stringify({ token })}\n\n`);
            }
          } catch {}
        }
      }
    }

    res.end();
  } catch (err) {
    console.error(err);

    if (res.headersSent) {
      res.end();
    } else {
      res.status(500).json({ error: err.message });
    }
  }
};