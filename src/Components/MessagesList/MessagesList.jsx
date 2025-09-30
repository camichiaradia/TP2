import React from 'react'
import Messages from '../Messages/Messages'

const MessagesList = () => {
  const messages = [
      {
        id: 1,
        author: "Maria",
        content: "Hola, como va?",
        timestamp: "10:30 am"
      },
      {
        id: 2,
        author: "Yo",
        content: "Bien, ustedes?",
        timestamp: "12:00 am"
      },
      {
        id: 3,
        author: "Maria",
        content: "Bien, Cansada.",
        timestamp: "13:00 pm",
      }
  ]

  const messages_list_JSX = messages.map(
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

