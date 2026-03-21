import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import uploadRoute from "./routes/uploadRoute.js";
import contactRoutes from "./routes/Contact.js";
import  chatMessageRoute  from "./routes/chatMessageRoute.js";

dotenv.config();



const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/uploadRoute", uploadRoute);
app.use("/api/chat-stream", chatMessageRoute);


// / ✅ Frontend build setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/build"))); // Vite default build folder
// If you're using CRA: "../build"

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});