import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import Header from './header';
import ChatBot from './ChatBot'; // Import ChatBot component
import './styles/bot.css';
import Navitem from './navItem';
import { Chat } from "./Chat";
import { SearchBox } from "./SearchBox";

const Bot = () => {
  const [Ask, setAsk] = useState(""); // Initialize state for Ask
  const [Ans, setAns] = useState(""); // Initialize state for Ans

  const generateAnswer = async () => {
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyBHPFCmbinntnw9mg3d8FVAcnmP2AOsXSw",
        {
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: Ask 
                }
              ]
            }
          ]
        }
      );
      const answerText = response.data.candidates[0].content.parts[0].text;
      setAns(answerText); 
      console.log(answerText);
    } catch (err) {
      console.error(err);
    }
  };

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
              <Navitem item="Explore" />
              <Navitem item="Booking" />
              <Navitem item="News" />
              <Navitem item="Contact" />
              <Navitem item="Account" />
            </div>
            <div className="bot-user-chats">
            <Chat chats={Ask}/>
            </div>
            <div className="bot-ai-chats">
            <Chat chats={Ans}/>
            </div>
            <div className="chat-searchBox">
              <SearchBox 
                onchange={(e) => setAsk(e.target.value)} 
                onclick={generateAnswer}
              />
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
