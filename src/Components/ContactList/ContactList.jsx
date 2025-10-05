import React from 'react';
import './ContactList.css'
import { getAllContacts } from '../../service/ContactService';
import { Link } from 'react-router';


const ContactList = () => {
    const contacts = getAllContacts()
    return (
      <div className='contenedor-contactList'>
        {
          contacts.map(
            (contact) => {
              return (
                  <ContactItem
                      contact={contact}
                      key={contact.id}                  
                  />
              )
            }
          )
        }
      </div>
    )
} 


const ContactItem= (props) => {
  const contact = props.contact
    return (
      <div className='contact-list'>
                <Link to={"/contacto"}>
                    <div className='name_contact'>
                      <h2>{contact.name}</h2>
                    </div>
                    <div className='photo_profile'>
                      <img className="photo" src={contact.profile_img}/>
                    </div>
                    <span className='state_contact'>
                      Estado: {contact.state}
                    </span>
                </Link>
      </div>
    )
} 

    export default ContactList