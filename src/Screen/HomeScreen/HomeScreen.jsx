import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
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
                                <div className='contenedordos_text'>
                                    <div className='content_hijo_home'>
                                        <span className='texto-noselect'> 
                                        ¡Bienvenidos al Chat de Whatsapp! 
                                        </span>
                                        <img className="logo-wp" src="./whatsapp.svg"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
}

export default HomeScreen
