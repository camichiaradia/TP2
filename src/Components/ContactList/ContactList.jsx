import React, { useContext } from 'react';
import './ContactList.css'
import { getAllContacts } from '../../service/ContactService';
import { Link } from 'react-router-dom';
import { ContactListContext } from '../../Context/ContactListContext';



const ContactList = () => {

    const {contactList, isContactListLoading}= useContext(ContactListContext)
    
    return (
      <ul className='contenedor-contactList'>
        {
          isContactListLoading
          ? <span>Cargando contactos..</span>
          : contactList.map(
            (contact) => {
              return (
                  <ContactItem
                      key={contact.id}
                      name={contact.name}
                      profile_img={contact.profile_img}
                      contact={contact}
                  />
              )
            }
          )
        }
      </ul>
    )
} 

const ContactItem= (props) => {
const contact= props.contact;

    return (
      <li className='contact-list'>
                <Link to={`/contacto/${contact.id}`}>
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
      </li>
    )
} 

    export default ContactList
