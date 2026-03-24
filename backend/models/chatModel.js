import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  sessionId: String,
  messages: [
    {
      role: String,
      content: String,
    },
  ],
});

export const Chat = mongoose.model("Chat", chatSchema);