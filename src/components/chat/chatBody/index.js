import React from 'react'
import ChatBodyFooter from './chatBodyFooter';
import ChatBodyHeader from './chatBodyHeader';
import ChatBodyMain from './chatBodyMain';
import "./index.css";

const ChatBody = () => {
  return (
    <div className='chat_body'>
        <ChatBodyHeader />
        <ChatBodyMain />
        <ChatBodyFooter />
    </div>
  )
}

export default ChatBody