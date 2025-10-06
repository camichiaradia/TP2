import React, { useContext } from 'react';
import './ContactList.css'
import { getAllContacts } from '../../service/ContactService';
import { Link } from 'react-router-dom';
import { ContactListContext } from '../../Context/ContactListContext';



const ContactList = () => {

    const {contactList, isContactListLoading}= useContext(ContactListContext)
    
    return (
      <div className='contenedor-contactList'>
        {
          isContactListLoading
          ? <span>Cargando Contactos..</span>
          : contactList.map(
            (contact) => {
              return (
                  <ContactItem
                      key={contact.id}
                      contact={contact.id}
                  />
              )
            }
          )
        }
      </div>
    )
} 

const ContactItem= (props) => {
  const contact= props.contact

    return (
      <div className='contact-list'>
                <Link to={"/contacto/" + contact.id}>
                    <div className='name_contact'>
                      <h2>{contact.name}</h2>
                    </div>
                    <div className='photo_profile'>
                      <img className="photo" src={contact.profile_img} alt={`Foto de perfil de ${contact.name}`}/>
                    </div>
                    <span className='state_contact'>
                      Estado: {contact.state}
                    </span>
                </Link>
      </div>
    )
} 

    export default ContactList
