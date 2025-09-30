import React from 'react'
import './ContenedorBase.css'
import ContactList from '../ContactList/ContactList'
import MessagesList from '../MessagesList/MessagesList'


function ContenedorBase(propiedades) {
    console.log(propiedades)
    return (
        <div className='hero_basepadre'>
            <div className='contenthero_basepadre'>
                {/* <img src="" alt="" /> */}
                <div className='contenedorhero_basehijo'>
                    <div className='contenedoruno_hijo'>
                        <div className='chatList'>
                            <h1 className='titulo_left'>
                                Chats
                            </h1>
                        </div>

                        <div className='chatList'>
{/*                             <MessagesList/> */}
                        </div>

                </div>


                <div className='contenedordos_hijo'>
                    <div className='messages_contenedorheader_padre'>
                        <div className='messages_header_hijo'>
                            <div className='chatfoto'>
                                <img src="/src/Static/foto1.jpg" alt="fotoMaria" />
                            </div>
                            
                            <div className='chatHeader'>
                                <h1 className='titulo_right'>Maria</h1>
                            </div>
                            </div>

                            <div>
                                <MessagesList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    )
}

export default ContenedorBase