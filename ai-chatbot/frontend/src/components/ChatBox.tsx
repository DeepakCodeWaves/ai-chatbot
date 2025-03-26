import { useState } from "react";
import axios from "axios";
import "../styles/ChatBox.css"; // Import CSS

const ChatBox = () => {
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = { role: "user", content: input };

        setMessages([...messages, userMessage]);
        setInput("");

        try {
            const res = await axios.post("http://localhost:5000/api/chat", { message: input });
            const botMessage = { role: "assistant", content: res.data.response };
            setMessages([...messages, userMessage, botMessage]);
        } catch {
            setMessages([...messages, { role: "assistant", content: "Error fetching response" }]);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((msg, i) => (
                    <div key={i} className={`message ${msg.role}`}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatBox;
