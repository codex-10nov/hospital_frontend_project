import React from 'react';
import MessageBody from '../chatBodyMessage';
import "./index.css"

const ChatBodyMain = () => {
  return (
    <div className="chatBody">
        <p className='chatBody_messageBody'>
            <MessageBody />
        </p>
        <p className='chatBody_messageBody'>
            <MessageBody />
        </p>
        <p className='chatBody_messageBody chatBody_messageReceiver'>
            <MessageBody />
        </p>
        <p className='chatBody_messageBody'>
            <MessageBody />
        </p>
    </div>
  )
}

export default ChatBodyMain