import React, { useState } from "react";
import axios from 'axios'; // Correct import

const apiKey = 'AIzaSyCXSAY_XaH_Ut_SdWg-nLwYVxyzNsjQKIc';  // Ensure to keep API keys secure
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

const ChatBot = ({ messages = [], setMessages }) => { // Default messages to empty array
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        // Add user message to chat
        setMessages([...messages, { type: 'user', text: input }]);

        try {
            const response = await axios.post(url, {
                contents: [
                    { parts: [{ text: input }] }
                ]
            });

            // Extract the response text
            const answer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
            
            // Add AI response to chat
            setMessages([...messages, { type: 'user', text: input }, { type: 'ai', text: answer }]);
        } catch (error) {
            console.error("Error in API call:", error.message);
        }

        // Clear input field
        setInput('');
    };

    return (
        <div className="chat-bot">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.type}>
                        {msg.type === 'user' ? 'You: ' : 'AI: '}
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBot;
