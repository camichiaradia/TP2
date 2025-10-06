import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import ContenedorMessage from '../../Components/ContenedorMessage/ContenedorMessage'
import "./HomeScreen.css"

const HomeScreen = () => {
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


                            </div>
                        </div>
                </div>
            </div>
        )
}

export default HomeScreen
