import React from "react";
import "./styles/Chat.css";

export const Chat = ({chats}) => {
  return (
    <div className="bot-frame">
      <div className="bot-label">
        <p className="bot-memories">
          {chats}
        </p>
      </div>
    </div>
  );
};
