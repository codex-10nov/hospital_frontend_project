import React from 'react'
import moment from 'moment';
import "./index.css"

const MessageBody = () => {
    var date = moment().format("LT");
  return (
    <p className='chatBody_insidePara'>
        <span className='chatBody_name'>You</span>
        This is a message
        <span className='chatBody_timeStamp'>{date}</span>
    </p>
  )
}

export default MessageBody