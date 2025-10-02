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
    <div className='content_formulario_padre'>
        <form onSubmit={handleSubmit}>
          <div className='content_formulario_hijo'>
            <span className='emoji_form'>
              <i className="bi bi-emoji-smile"></i>
            </span>
            <textarea className='textarea_form' id="mensaje" name="mensaje"/>
            <button className='button_enviar'>
              <div className='icon_enviar'>
                <i className="bi bi-send"></i>
              </div>
            </button>
          </div>
        </form>
    </div>
  )
}

export default NewMessageForm