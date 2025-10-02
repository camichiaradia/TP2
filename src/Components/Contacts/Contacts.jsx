import React from 'react'



function Contacts (propiedades){
    return(
        <div className='list_contact'>
            <span>{propiedades.author}</span>
            <p>{propiedades.content}</p>
            <span>{propiedades.timestamp}</span>
            <hr/>
        </div>
    )
}

export default Contacts


export const contacts = [
        {
            id: 1,
            author: "Maria",
            phone: "+54 9 11 1234-5678",
            state: "En línea",
            lastconnection: "Ahora"
        },
        {
            id: 2,
            author: "Lautaro",
            phone: "+54 9 11 8765-4321",
            state: "Ocupada",
            lastconnection: "Ayer a las 18:30"
        },
        {
            id: 3,
            author: "Patricio",
            phone: "+54 9 11 1122-3344",
            state: "¡Disponible para charlar!",
            lastconnection: "Hace 5 minutos"
        },
        {
            id: 4,
            author: "Camila",
            phone: "+54 9 11 5566-7788",
            state: "Sin información",
            lastconnection: "15/09/2024"
        }
]
