import React from 'react';
import './ContactList.css'
import Contacts, { contacts } from '../Contacts/Contacts';

const ContactList = () => {


  const contacts_list_JSX = contacts.map(
  (contact) => {
    return (
      <Contacts
      key={contact.id}
      author={contact.author}
      phone={contact.phone}
      state={contact.state}
      lastconnection={contact.state} 
      id={contact.id}/>
    )
  }
)

  return (
    <div className="lista-contactos">
      <h1 className='text_listcontact'>
        Lista de Contactos
      </h1>
    <div>{contacts_list_JSX}</div>
    </div>
  )
}

export default ContactList
