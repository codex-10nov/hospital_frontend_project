import React from 'react';
import { DonutLarge, Chat, MoreVert, SearchOutlined, GroupAdd } from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/material';
import ChatBlock from "./chatBlock"
import "./index.css"

const SideBar = () => {
  var photoUrl = "https://imgs.search.brave.com/6SVNJu29npY1K6c0JBCfy0x3Ludv0xe4e2LnbZ8HY2c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI5MjE5/NjcuanBn"
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
        <div className="sidebar_headerLeft">
          <Avatar src={photoUrl} />
        </div>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder='Search or start new chat' type="text"/>
        </div>
      </div>
      <div className="sidebar_body">
        <ChatBlock />
        <ChatBlock />
        <ChatBlock />
      </div>
    </div>
  )
}

export default SideBar  