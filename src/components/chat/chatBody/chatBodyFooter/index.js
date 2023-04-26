import { AddReaction, Send } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react';
import "./index.css"

const ChatBodyFooter = () => {
  return (
    <div className='chatFooter'>
        <IconButton>
            <AddReaction />
        </IconButton>
        <form> 
            <input
                placeholder='Type a message'
                type="text"/>
            <IconButton type='submit'><Send /></IconButton>
        </form>
    </div>
  )
}

export default ChatBodyFooter