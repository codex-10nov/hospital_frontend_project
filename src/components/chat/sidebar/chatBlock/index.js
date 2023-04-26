import { Avatar } from '@mui/material'
import React from 'react';
import "./index.css"

const ChatBlock = () => {
  return (
    <div className="chatblock">
        <Avatar/>
        <div className="chatblock_info">
            <h2>Title</h2>
            <p>This is last message</p>
        </div>
    </div>
  )
}

export default ChatBlock