import { useState, useRef, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Button, Typography } from "@material-tailwind/react";
import Footer from "../components/Footer.jsx";
import ReactMarkdown from "react-markdown";

const ChatBot2 = () => {
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi, I am Developer Zwide chat assistant, what would you like to know about Bukeka Nxumalo?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const logMessage = async (msg) => {
        await fetch("http://localhost:8000/chatlog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...msg, timestamp: new Date().toISOString() }),
        });
    };
    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = { from: "user", text: input };
        setMessages((msgs) => [...msgs, userMsg]);
        setInput("");
        setLoading(true);
        await logMessage(userMsg);

        try {
            const res = await fetch("http://localhost:8000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });
            const data = await res.json();
            const botMsg = { from: "bot", text: data.response || "Sorry, I couldn't respond." };
            setMessages((msgs) => [...msgs, { from: "bot", text: data.response || "Sorry, I couldn't respond." }]);
            await logMessage(botMsg);
        } catch {
            const errorMsg = { from: "bot", text: "Error connecting to AI." };
            setMessages((msgs) => [...msgs, { from: "bot", text: "Error connecting to AI." }]);
            await logMessage(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[600px] w-full bg-white p-2 pr-16">
            <div className="flex justify-between items-center mb-2">
                <Typography variant="h5" color="blue-gray">
                        Powered by Gemini
                    </Typography>
                <Button variant="text" className="rounded-full p-1 px-4" onClick={() => setMessages([{ from: "bot", text: "Hello! How can I help you today?" }])}>
                    New Chat
                </Button>
            </div>

            {/* Quick Prompts */}
            

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto bg-gray-50 rounded-lg p-4 mb-3 border">
                    {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex mb-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow
                                ${msg.from === "user"
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                                }`}
                        >
                            {msg.from === "bot" ? (
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            ) : (
                                msg.text
                            )}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start mb-2">
                        <div className="px-4 py-2 rounded-2xl bg-gray-200 text-gray-800 max-w-[75%] text-sm shadow animate-pulse">
                            Chat Bot is typing...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex items-center gap-2 border rounded-full px-4 py-2 bg-white shadow-sm">
                <input
                    type="text"
                    className="flex-1 border-none focus:ring-0 focus:outline-none text-sm bg-transparent"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    disabled={loading}
                />
                <button
                    onClick={handleSend}
                    className={`rounded-full p-2 transition ${loading ? "bg-gray-200" : "bg-blue-500 hover:bg-blue-600"} text-white`}
                    aria-label="Send"
                    disabled={loading}
                >
                    <CiCirclePlus className="w-5 h-5" />
                </button>
            </div>

            <Footer />
        </div>
    );
};


export default ChatBot2;