import React, { useState }  from 'react'
import Messages from '../Messages/Messages'
import "./MessagesList.css"


const MessagesList = (props) => {


  const messages_list_JSX = props.messages.map(
  (message) => {
    return (
      <div key={message.id}>
        <Messages        
        author={message.author}
        content={message.content}
        timestamp={message.timestamp} 
        id={message.id}/>
      </div>
    )
  }
)

  return (
    <div>{messages_list_JSX}</div>
  )
}

export default MessagesList

