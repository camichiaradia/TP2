import React from 'react'
import './Messages.css'

function Messages (propiedades){
/*     const esMensajePropio = propiedades.author == "Yo"; */

    return(
        
            <div className={
                propiedades.author == "Yo" 
                ? "mensaje_derecha" 
                : "mensaje_izquierda"
            }>
                <div className='tarjeta_chat'>
                    <span className='name_message'>
                        {propiedades.author}
                    </span>
                    <p className='p_message'>{propiedades.content}</p>
                    <span className='p_time'>{propiedades.timestamp}</span>
                </div>
            </div>

    )
}

export default Messages
