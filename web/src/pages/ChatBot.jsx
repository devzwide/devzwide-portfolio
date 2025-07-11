import { useState, useRef, useEffect } from "react";
import { FaRobot, FaUser, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { Button, Input, Card } from "@material-tailwind/react";
import PrimaryButton from "../components/ui/PrimaryButton.jsx";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";

const Bot = (props) => <FaRobot {...props} />;
const User = (props) => <FaUser {...props} />;
const Loader2 = (props) => <FaSpinner {...props} />;
const Send = (props) => <FaPaperPlane {...props} />;

const ScrollArea = ({ children, className }) => (
    <div className={`overflow-y-auto ${className}`}>{children}</div>
);

const ChatBot = () => {
    const [messages, setMessages] = useState([
        {
        id: 1,
        role: "assistant",
        content: "Hi, I am Developer Zwide chat assistant, what would you like to know about Bukeka Nxumalo?",
        timestamp: new Date(),
        },
    ]);

    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showApiInput, setShowApiInput] = useState(false);
    const [apiKey, setApiKey] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    const sendMessage = async () => {
        if (!inputValue.trim()) return;
        const userMsg = {
            id: Date.now(),
            role: "user",
            content: inputValue,
            timestamp: new Date(),
        };
        setMessages((msgs) => [...msgs, userMsg]);
        setInputValue("");
        setIsLoading(true);

        try {
            const res = await fetch("https://devzwide-portfolio.onrender.com/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg.content, apiKey }),
            });
            const data = await res.json();
            setMessages((msgs) => [
                ...msgs,
                {
                id: Date.now() + 1,
                role: "assistant",
                content: data.response || "Sorry, I couldn't respond.",
                timestamp: new Date(),
                },
            ]);
        } catch {
            setMessages((msgs) => [
                ...msgs,
                {
                id: Date.now() + 2,
                role: "assistant",
                content: "Error connecting to AI.",
                timestamp: new Date(),
            },]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const saveApiKey = () => {
        setShowApiInput(false);
    };

    return (
    <div className="h-screen min-h-0 bg-gradient-to-br from-white via-slate-100 to-white flex flex-col">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 p-3 sm:p-4 shadow-sm flex-shrink-0">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-9 h-9 flex items-center justify-center">
                        <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                        <h1 className="text-lg sm:text-xl font-bold text-slate-800">Developer Zwide</h1>
                        <p className="text-xs sm:text-sm text-slate-500">AI Assistant for Bukeka Nxumalo</p>
                    </div>
                </div>
                <Button
                    onClick={() => setMessages([
                        {
                            id: 1,
                            role: "assistant",
                            content: "Hi, I am Developer Zwide chat assistant, what would you like to know about Bukeka Nxumalo?",
                            timestamp: new Date(),
                        },
                    ])}
                    className="relative px-3 py-1.5 font-bold text-black group mt-2 sm:mt-0"
                >
                    <span className="absolute inset-0 w-full h-full bg-blue-300"></span>
                    <span className="absolute inset-0 w-full h-full border-black"></span>
                    <span className="relative">New Chat</span>
                </Button>
            </div>
        </div>

        {/* API Key Input */}
        {showApiInput && (
             <div className="bg-white/70 backdrop-blur-sm border-b border-slate-200 p-3 sm:p-4 flex-shrink-0">
                <div className="max-w-4xl mx-auto">
                    <Card className="p-4 bg-white border border-slate-200 shadow">
                        <h3 className="text-slate-800 font-medium mb-2 text-base sm:text-lg">Enter your Gemini API Key</h3>
                        <p className="text-slate-500 text-xs sm:text-sm mb-3">
                            To get started, please enter your Google Gemini API key. You can get one from{" "}
                            <a
                                href="https://makersuite.google.com/app/apikey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-500 underline"
                            >
                                Google AI Studio
                            </a>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                                type="password"
                                placeholder="Enter your Gemini API key..."
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                className="bg-slate-100 border-slate-200 text-slate-800 placeholder-slate-400 flex-1"
                            />
                            <Button onClick={saveApiKey} className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                                Save
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 max-w-4xl mx-auto w-full p-2 sm:p-4 flex flex-col min-h-0">
            <ScrollArea className="flex-1 h-full min-h-0">
                <div className="space-y-4 pb-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex gap-2 sm:gap-3 animate-fade-in ${
                                message.role === "user" ? "justify-end" : "justify-start"
                            }`}
                        >
                            {message.role === "assistant" && (
                                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                                </div>
                            )}

                            <div
                                className={`max-w-[85%] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
                                    message.role === "user"
                                        ? "bg-gray-600 from-blue-500 to-purple-400 text-white ml-auto"
                                        : "bg-white text-slate-800 border border-slate-200 shadow"
                                }`}
                            >
                                <div className="whitespace-pre-wrap text-xs sm:text-sm">
                                    <ReactMarkdown>{message.content}</ReactMarkdown>
                                </div>
                                <span className="text-[10px] sm:text-xs opacity-70 mt-1 block">
                                    {message.timestamp.toLocaleTimeString()}
                                </span>
                            </div>

                            {message.role === "user" && (
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 from-slate-300 to-slate-400 rounded-full flex items-center justify-center flex-shrink-0">
                                    <User className="w-4 h-4 text-slate-700" />
                                </div>
                            )}
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex gap-2 sm:gap-3 justify-start animate-fade-in">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-400 rounded-full flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow">
                                <div className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                                    <span className="text-slate-500 text-xs sm:text-sm">Thinking...</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </ScrollArea>
        </div>

        {/* Input Area */}
        <div className="bg-white/80 backdrop-blur-sm border-t border-slate-200 p-3 sm:p-4 shadow-inner flex-shrink-0">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                        placeholder="Ask me anything about Bukeka Nxumalo..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isLoading || showApiInput}
                        className="bg-slate-100 border-slate-200 text-slate-800 placeholder-slate-400 flex-1"
                    />
                    <Button
                        onClick={sendMessage}
                        disabled={isLoading || !inputValue.trim() || showApiInput}
                        className="rounded-lg bg-white border border-slate-200 px-4 py-2 sm:px-6 sm:py-2 shadow transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed group w-full sm:w-auto"
                    >
                        {isLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin text-slate-400 group-hover:text-blue-300 transition-colors duration-200" />
                        ) : (
                            <Send className="w-4 h-4 text-slate-500 group-hover:text-blue-300 transition-colors duration-200" />
                        )}
                    </Button>
                </div>
                {!showApiInput && (
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-xs text-slate-400">
                            Press Enter to send • Shift+Enter for new line
                        </p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatBot;