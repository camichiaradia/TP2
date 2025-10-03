import React from 'react';
import './ContactList.css'
import { getAllContacts } from '../../service/ContactService';
import { Link } from 'react-router';


const ContactList = () => {
    const contacts = getAllContacts()
    return (
      <div>
        {
          contacts.map(
            (contact) => {
              return (
                  <Link>
                    <h2>{contact.name}</h2>
                    <img src={contact.profile_img} widht={"150px"}/>
                    <span>{contact.state}</span>
                  </Link>
              )
            }
          )
        }
      </div>
    )
} 
export default ContactList


