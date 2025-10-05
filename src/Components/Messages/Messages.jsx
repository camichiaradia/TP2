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

/* 
export const messages = [
        {
            id: 1,
            author: "Maria",
            phone: "+54 9 11 1234-5678",
            state: "En línea"
        },
        {
            id: 2,
            author: "Lautaro",
            phone: "+54 9 11 8765-4321",
            state: "Ocupada"

        },
        {
            id: 3,
            author: "Patricio",
            phone: "+54 9 11 1122-3344",
            state: "¡Disponible para charlar!"
        },
        {
            id: 4,
            author: "Camila",
            phone: "+54 9 11 5566-7788",
            state: "Sin información"
        }
]  */