// export const ChatMessage = async (req, res) => {
//   try {
//     console.log("API KEY:", process.env.GROQ_API_KEY);

//     const { message } = req.body;

//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//     model: "llama-3.3-70b-versatile",
//           messages: [{ role: "user", content: message }],
//         }),
//       }
//     );

//     const text = await response.text();
//     console.log("🔥 RAW RESPONSE:", text);

//     let data;
//     try {
//       data = JSON.parse(text);
//     } catch {
//       return res.json({ reply: "Invalid JSON response" });
//     }

//     if (!response.ok) {
//       return res.json({
//         reply: data?.error?.message || "Groq error",
//       });
//     }

//     const reply = data?.choices?.[0]?.message?.content;

//     res.json({
//       reply: reply || "Empty response from AI",
//     });

//   } catch (err) {
//     console.error("🔥 ERROR:", err);
//     res.json({ reply: "Server crashed" });
//   }
// };


// export const ChatMessage = async (req, res) => {
//   try {
//     const response = await fetch("https://api.groq.com/openai/v1/models", {
//       headers: {
//         Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//       },
//     });

//     const data = await response.json();

//     console.log("🔥 MODELS:", data);

//     res.json({ reply: "Check your terminal for available models" });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// };

export const ChatStream = async (req, res) => {
  try {
    const { message } = req.body;

    // 1. SSE HEADERS (IMPORTANT)
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // 2. CALL GROQ STREAM API
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
            { role: "user", content: message },
          ],
          stream: true, // 🔥 IMPORTANT
        }),
      }
    );

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let fullText = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      // Groq sends: data: {...}
      const lines = chunk.split("\n");

      for (let line of lines) {
        if (line.startsWith("data: ")) {
          const json = line.replace("data: ", "");

          if (json === "[DONE]") {
            res.write(`data: [DONE]\n\n`);
            res.end();
            return;
          }

          try {
            const parsed = JSON.parse(json);

            const token = parsed?.choices?.[0]?.delta?.content;

            if (token) {
              fullText += token;

              // 🔥 STREAM TOKEN TO FRONTEND
              res.write(`data: ${JSON.stringify({ token })}\n\n`);
            }
          } catch (err) {
            // ignore parsing errors
          }
        }
      }
    }

    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};