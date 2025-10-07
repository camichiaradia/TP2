import React, { useState }  from 'react'
import Messages from '../Messages/Messages'
import "./MessagesList.css"


const MessagesList = (props) => {


  const messages_list_JSX = props.messages.map(
  (message) => {
    return (
      
        <Messages     
        key={message.id}  
        author={message.author}
        content={message.content}
        timestamp={message.timestamp} 
        id={message.id}/>
      
    )
  }
)

  return (
      {messages_list_JSX}
  )
}

export default MessagesList

