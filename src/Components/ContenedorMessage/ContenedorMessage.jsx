import React, { useState } from 'react';
import "./ContenedorMessage.css"
import MessagesList from '../MessagesList/MessagesList';
import NewMessageForm from '../NewMessageForm/NewMessageForm';
import ChatHeader from '../ChatHeader/ChatHeader';


function ContenedorMessage() {
    const [messages, setMessages] = useState( [
        {
        id: 1,
        author: "Maria",
        content: "Hola, como va?",
        timestamp: "10:30 am"
        },
        {
        id: 2,
        author: "Yo",
        content: "Bien, vos Mari?",
        timestamp: "12:00 am"
        },
        {
        id: 3,
        author: "Maria",
        content: "Bien, Cansada, tuve un día largo.",
        timestamp: "13:00 pm",
        },
        {
        id: 4,
        author: "Yo",
        content: "Uhh, bueno ahora descansa.",
        timestamp: "13:50 pm",
        }
        ]
    )


    const onCreateNewMessage = (new_message) =>{
        console.log ("Mensaje: ", new_message)
    const new_message_object= {
        content: new_message,
        author: "Yo",
        timestamp: "15:30 pm",
        id: messages.length + 1
    }
    
    setMessages([...messages, new_message_object])
}

    return (
                <div className='contenedordos_hijo'>
                    <div className='content_message'>
                            
                            <div className='message_list'>  
                                <MessagesList 
                                messages={messages} />
                            </div> 

                            <div>
                                <NewMessageForm
                                onCreateNewMessage= {onCreateNewMessage} />
                            </div>
                    </div>
                </div>
    
    )
}
export default ContenedorMessage