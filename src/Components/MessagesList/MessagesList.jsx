import React from 'react'
import Messages from '../Messages/Messages'

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
    <div>{messages_list_JSX}</div>
  )
}

export default MessagesList

