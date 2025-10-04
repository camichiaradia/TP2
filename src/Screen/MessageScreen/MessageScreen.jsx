import React, { useState } from 'react'
import "../MessageScreen/MessageScreen.css"
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import HomeScreen from '../HomeScreen/HomeScreen'
import { Route, Routes } from "react-router"


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
    <div className='hero'>
            <div className='contenthero_basepadre'>
                <div className='contenedorhero_basehijo'>

                    < div className='contenedoruno_hijo'> 
                        <div className='content_chatList'>
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
                        <div className='contenedor_list_contact'>  
                            <div className='contenedor_HomeScreen'>
                                <HomeScreen/>
                            </div>
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
                </div>
                
            </div> 
        </div>
    )
}

export default MessageScreen