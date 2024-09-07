import React, { useState } from 'react';
import Header from './header';
import ChatBot from './ChatBot'; // Import ChatBot component
import './styles/bot.css';

const Bot = () => {
  const [messages, setMessages] = useState([]); // Initialize state for messages

  return (
    <div className="bot-desktop">
      <div className="bot-dashboard-wrapper">
        <div className="bot-dashboard">
          <div className="bot-overlap-group">
            <img className="bot-png" alt="Png" src="../PngG.png" />
          </div>
          <div className="bot-navbar">
            <div className="bot-brand">
              <div className="bot-logo">
                <div className="bot-travelaja">travnt</div>
              </div>
            </div>
            <div className="bot-frame-2">
              <Header />
            </div>
            <div className="bot-user-chats">
              {/* Additional user chat UI components can be added here if needed */}
            </div>
            <div className="bot-ai-chats">
              <ChatBot messages={messages} setMessages={setMessages} /> {/* Pass messages and setMessages */}
            </div>
            <div className="bot-language">
              <img className="bot-group-3" alt="Group" src="group-1.png" />
              <div className="bot-text-wrapper-5">IN</div>
              <img className="bot-group-4" alt="Group" src="group-2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;
