import React from "react";
import Navitem from "./navItem";
import Dest from "./destination";
import "./styles/bot.css";
import SearchButton from "./searchButton";
import { Chat } from "./Chat";
import { SearchBox } from "./SearchBox";


const Bot = () => {
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
              <Navitem item="Explore"></Navitem>
              <Navitem item="Booking"></Navitem>
              <Navitem item="News"></Navitem>
              <Navitem item="Contact"></Navitem>
              <Navitem item="Account"></Navitem>
            </div>
            <div className="bot-user-chats">
                <Chat/>
            </div>
            <div className="bot-ai-chats">
                <Chat/>
            </div>
            <div className="chat-searchBox">
                <SearchBox/>
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
