import React, { useEffect, useState } from 'react'
import "../MessageScreen/MessageScreen.css"
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../service/ContactService'
import ContactList from '../../Components/ContactList/ContactList'; 



function MessageScreen() {

    const [messages, setMessages] = useState()
    const [isLoading, setIsLoading] = useState(false)


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


    const {id_contacto} = useParams()

    function loadContactById (contact_id){
        setIsLoading (true)
        setTimeout(
        () => {
            const contacto= getContactById(contact_id)
            setMessages(contacto.messages)
            setIsLoading (false)
        },
        2000
        )
    }

    useEffect(
        ()=> {
            loadContactById(id_contacto)
        },
        [id_contacto]
    )

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
                                <div className='contectdos_text'>
                                    <span className='texto-noselect'> 
                                    No hay contacto seleccionado. 
                                    </span>
                                </div>

                                    <div className='header_message_hijo'>
                                        <div className='chatfoto'>
                                            <img className="Maria" src="/foto1.jpg" alt="fotoMaria" />
                                        </div>
                                        <div className='chatHeader'>
                                            <h1 className='titulo_right'>Maria</h1>
                                        </div>
                                    </div> 

                                    <div className='content_message'>
                                        <div className='message_list'>  
                                        {   
                                            isLoading
                                            ? <span>cargando..</span>
                                            : <MessagesList 
                                            messages={messages} />
                                        } 
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