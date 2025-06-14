import { GoogleGenAI } from "@google/genai";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const geminiAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const chatWithGemini = async (req, res) => {
    const { message } = req.body;
    try {
        const profilePath = path.resolve(__dirname, "../data/bukeka.json");
        const profile = JSON.parse(fs.readFileSync(profilePath, "utf-8"));

        const prompt = `
        You are Bukeka Nxumalo. Answer the following user question as Bukeka, using the information in your profile below. Speak in first person, as if you are Bukeka.

        Profile: ${JSON.stringify(profile)}

        User: ${message}
        Bukeka:
        `;

        const response = await geminiAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });

        res.status(200).json({ response: response.text });
    } catch (error) {
        console.error("Error in chatWithGemini:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
    }
};

export const saveChat = async (req, res) => {
    const { from, text, timestamp } = req.body;

    try {
        const chatLogPath = path.resolve(__dirname, "../data/chatlog.json");
        let chatLog = [];
        if (fs.existsSync(chatLogPath)) {
            const fileContent = fs.readFileSync(chatLogPath, "utf-8");
            if (fileContent.trim()) {
                try {
                    chatLog = JSON.parse(fileContent);
                } catch {
                    chatLog = [];
                }
            }
        }
        chatLog.push({ from, text, timestamp });
        fs.writeFileSync(chatLogPath, JSON.stringify(chatLog, null, 2));
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error saving chat:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
    }
};