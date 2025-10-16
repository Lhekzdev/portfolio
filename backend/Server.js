import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRoute from "./routes/uploadRoute.js";
import contactRoutes from "./routes/Contact.js";

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

