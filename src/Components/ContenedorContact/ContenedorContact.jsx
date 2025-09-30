import React from 'react'
import './ContenedorContact.css'
import ContactList from '../ContactList/ContactList'

function ContenedorContact (){
  return (
    <div className='content_padre'>
      <ContactList
      name="Maria"
      />
      <ContactList
      name="Lautaro"
      />
      <ContactList
      name="Belén"
      />
      <ContactList
      name="Patricio"
      />
    </div>
  )
}

export default ContenedorContact