import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hello! How can I help you today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { from: "user", text: input }]);
        setInput("");
        // You can add bot response logic here
    };

    return (
        <div className="flex flex-col h-[500px] w-full max-w-xl mx-auto bg-gray-50 rounded-lg shadow p-4">
            <div className="flex-1 overflow-y-auto mb-4 space-y-2">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`p-2 rounded-lg max-w-xs ${
                            msg.from === "user"
                                ? "bg-blue-500 text-white self-end"
                                : "bg-gray-200 text-gray-800 self-start"
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    className="flex-1 border rounded px-3 py-2 focus:outline-none"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                    aria-label="Send"
                >
                    <CiCirclePlus size={24} />
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
//  This CHAT Bot page is a bluepring, it will be used to create a chatbot interface where users can interact with the bot. The messages are displayed in a scrollable area, and users can type their messages and send them by pressing Enter or clicking the send button. The bot's responses can be added later as needed.