import React from 'react'
import './ContenedorBase.css'
import ContactList from '../ContactList/ContactList'
import MessagesList from '../MessagesList/MessagesList'
import NewMessageForm from '../NewMessageForm/NewMessageForm'


function ContenedorBase(propiedades) {

    const onCreateNewMessage = (new_message) =>{
        console.log=("Mesaje: ", new_message)
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
                        <div>
                            <MessagesList/>
                        </div>
                        <div>
                            <NewMessageForm
                            onCreateNewMessage= {onCreateNewMessage}
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        </div> 
    </div>
    )
}

export default ContenedorBase