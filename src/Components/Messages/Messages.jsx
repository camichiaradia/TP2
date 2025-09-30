import React from 'react'


function Messages (propiedades){
    return(
        <div>
            <span>{propiedades.author}</span>
            <p>{propiedades.content}</p>
            <span>{propiedades.timestamp}</span>
            <hr/>
        </div>
    )
}

export default Messages