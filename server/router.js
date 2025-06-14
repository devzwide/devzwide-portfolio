import express from "express";
import { chatWithGemini, saveChat } from "./controller/gemini.controller.js";

const router = express.Router();

router.post("/chat", chatWithGemini);
router.post("/chatlog", saveChat)

export default router;
