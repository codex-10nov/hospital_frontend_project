import React from 'react';
import SideBar from "./sidebar"
import ChatBody from "./chatBody";
import "./index.css"

function ChatScreen() {
  return (
    <div className="chat_screen">
        <SideBar />
        <ChatBody />
    </div>
  );
}

export default ChatScreen;
