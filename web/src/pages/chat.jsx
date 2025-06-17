import { useState, useRef, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRobot, FaUser, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { Button, Input, Card, Typography } from "@material-tailwind/react";
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
      // Replace with your backend API call
      const res = await fetch("http://localhost:8000/chat", {
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
        },
      ]);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Developer Zwide</h1>
            <p className="text-sm text-slate-300">AI Assistant for Bukeka Nxumalo</p>
          </div>
        </div>
      </div>

      {/* API Key Input */}
      {showApiInput && (
        <div className="bg-slate-800/30 backdrop-blur-sm border-b border-slate-700 p-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-4 bg-slate-800/50 border-slate-600">
              <h3 className="text-white font-medium mb-2">Enter your Gemini API Key</h3>
              <p className="text-slate-300 text-sm mb-3">
                To get started, please enter your Google Gemini API key. You can get one from{" "}
                <a
                  href="https://makersuite.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Google AI Studio
                </a>
              </p>
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Enter your Gemini API key..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
                <Button onClick={saveApiKey} className="bg-purple-600 hover:bg-purple-700">
                  Save
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4">
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-4 pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 animate-fade-in ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white ml-auto"
                      : "bg-slate-800/50 text-slate-100 border border-slate-700"
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                    <span className="text-slate-300">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </div>

      {/* Input Area */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2">
            <Input
              placeholder="Ask me anything about development..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading || showApiInput}
              className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim() || showApiInput}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
          {!showApiInput && (
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-slate-400">
                Press Enter to send • Shift+Enter for new line
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowApiInput(true)}
                className="text-slate-400 hover:text-slate-300"
              >
                Change API Key
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;