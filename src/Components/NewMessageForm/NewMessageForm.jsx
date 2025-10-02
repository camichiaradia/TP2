import React from 'react'
import './NewMessageForm.css'


const NewMessageForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const message_value = form.mensaje.value

    props.onCreateNewMessage(
      message_value
    )
  }

  return (
    <div className='content_formulario'>
      <form onSubmit={handleSubmit}>
        <span><i className="bi bi-emoji-smile"></i></span>
        <textarea id="mensaje" name="mensaje"/>
        <button>Enviar mensaje</button>
      </form>
    </div>
  )
}

export default NewMessageForm