import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import './styles/CHAT_BOT.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello there! How can I help you today?",
      isBot: true
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // To manage loading state

  const generateAnswer = async (userMessage) => {
    try {
      // Mock API request: Replace with your actual API URL
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyBHPFCmbinntnw9mg3d8FVAcnmP2AOsXSw",
        {
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: userMessage
                }
              ]
            }
          ]
        }
      );
      const answerText = response.data.candidates[0].content.parts[0].text;
      return answerText;
    } catch (err) {
      console.error("Error fetching AI response:", err);
      return "Sorry, I couldn't process that.";
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      // Add user message to chat
      setMessages([...messages, { text: input, isBot: false }]);
      setInput("");

      // Start loading for bot response
      setLoading(true);

      // Fetch bot response
      const botResponse = await generateAnswer(input);

      // Add bot response to chat
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, isBot: true }]);

      // Stop loading
      setLoading(false);
    }
  };

  return (
    <div className="chatbox-wrapper">
      <div className="message-box">
        {messages.map((message, index) => (
          <div key={index} className={`chat ${message.isBot ? 'response' : 'user-message'}`}>
            {message.isBot && <img src="./bot.png" alt="Chatbot" />}
            <span>{message.text}</span>
          </div>
        ))}
        {loading && <div className="chat response">Loading...</div>}
      </div>
      <div className="messagebar">
        <div className="bar-wrapper">
          <input
            type="text"
            placeholder="Enter your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <button onClick={handleSend}>
            <span className="material-symbols-rounded">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
