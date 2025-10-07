import React from 'react'
import './Messages.css'

function Messages (propiedades){
    return(
        <div className='tarjeta_chat'>
            <span className='name_message'>
                {propiedades.author}
            </span>
            <p className='p_message'>{propiedades.content}</p>
            <span>{propiedades.timestamp}</span>
        </div>
    )
}

export default Messages
