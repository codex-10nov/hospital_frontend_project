import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react';
import "./index.css"

const ChatBodyHeader = () => {
  return (
    <div className='chatBody__header'>
        <Avatar />
        <div className="chatBody_headerInfo">
            <h3>Sanya Sogani</h3>
            <p>Last Seen 4 Month ago</p>
        </div>
        <div className="chatBody_headerRight">
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
    </div>
  )
}

export default ChatBodyHeader