import React, { useState } from 'react'
import "./Screen/MessageScreen.css"
import MessagesList from '../Components/MessagesList/MessagesList'
import NewMessageForm from '../Components/NewMessageForm/NewMessageForm'
import ContactList from '../Components/ContactList/ContactList'


function MessageScreen() {

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
    <div className='hero_contenedor'>
        <div className='hero_basepadre'>
            <div className='contenthero_basepadre'>
                <div className='contenedorhero_basehijo'>
                    < div className='header_chatList'>
                        <div className='contenedoruno_hijo'>
                            <div className='chatList'>
                                <h1 className='titulo_left'>
                                    Chats
                                </h1>
                                <span className='icons_right_chatList'>
                                    <i className="bi bi-pencil-square"></i>
                                    <i className="bi bi-list"></i>
                                </span>
                            </div>
                    </div>
                        <div className=''>
                            <ContactList/>
                        </div>

                </div>


                <div className='contenedordos_hijo'>
                    <div className='contenedordos_header_padre'>
                        <div className='header_message_hijo'>
                            <div className='chatfoto'>
                                <img className="Maria" src="/foto1.jpg" alt="fotoMaria" />
                            </div>
                            <div className='chatHeader'>
                                <h1 className='titulo_right'>Maria</h1>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <MessagesList 
                            messages={messages} />
                        </div>
                        <div>
                            <NewMessageForm
                            onCreateNewMessage= {onCreateNewMessage} />
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        </div> 
    </div>
    )
}

export default MessageScreen