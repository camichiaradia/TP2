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
                                    <div className='content_logo-wp'>
                                        <img className='logo_wp' src='whatsappok.svg' alt='logo_whatsapp'>
                                        </img>
                                    </div>
                                    <div className='content_botones'>
                                        <button className='icon_botones'>
                                            <i className="bi bi-camera"></i>
                                        </button>
                                        <button className='icon_botones'>
                                            <i className="bi bi-list"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='contenedor_buscador'>
                                    <div className='buscador_box'>
                                        <button className='icon_buscador'>
                                            <i className="bi bi-search"></i>
                                        </button>
                                        <input type="text" placeholder="Preguntar a Meta AI o buscar"></input>
                                    </div>
                                </div>
                                <div className="chat-filters">
                                    <button className="filter-button active">
                                        Todos
                                    </button>
                                    <button className="filter-button">
                                        No Leídos
                                        <span className="notification-badge">3</span>
                                    </button>
                                    <button className="filter-button">
                                        Favoritos
                                    </button>
                                    <button className="filter-button">
                                        Grupos
                                    </button>
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
