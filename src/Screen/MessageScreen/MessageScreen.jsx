import React, { useContext, useEffect, useState } from 'react'
import "../MessageScreen/MessageScreen.css"
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
import ContactList from '../../Components/ContactList/ContactList'


function MessageScreen() {

    const {isContactDetailLoading, contactDetailed, onCreateNewMessage} = useContext (ContactDetailContext)

    console.log(contactDetailed)
    return (
            <div className='hero'>
                <div className='contenthero_basepadre'>
                    <div className='contenedorhero_basehijo'>

                            <div className='contenedoruno_hijo'> 
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
                            <ContactList/>
                            </div>
                            
                    
                            <div className='contenedordos_hijo'>

                                    <div className='header_message_hijo'>
                                        <ChatHeader />
                                    </div>

                                    <div className='content_message_screen'>
                                        <div className='message_list'>  
                                        {   
                                            isContactDetailLoading
                                            ? <span>Cargando..</span>
                                            : (
                                                contactDetailed
                                                ? <MessagesList 
                                                messages= {contactDetailed.messages || []} />
                                                : <span>Contacto no encontrado</span>
                                            )
                                        } 
                                        </div> 
                                    </div>

                                    <div>
                                        <NewMessageForm
                                        onCreateNewMessage= {onCreateNewMessage} />
                                    </div>
                                    
                            </div>
                    </div>
                </div>
            </div>
        )
}


export default MessageScreen