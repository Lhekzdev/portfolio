import express from "express";
import { ChatStream } from "../controllers/chatController.js";

const router = express.Router();

// router.post("/", ChatMessage);
router.post("/", ChatStream);
export default router;
