import React from 'react';
import './ContactList.css'

const ContactList = () => {
const Contacts = [
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

  const contacts_list_JSX = Contacts.map(
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
      <h1>Mis Contactos de WhatsApp</h1>
    <div>{contacts_list_JSX}</div>
    </div>
  )
}

export default ContactList
