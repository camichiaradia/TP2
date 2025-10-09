import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactListContext } from '../../Context/ContactListContext';
import './ChatHeader.css'; 

const ChatHeader = () => {

    const { id_contacto } = useParams();
    const navigate = useNavigate();
    const { getContactById } = useContext(ContactListContext); 
    const [contacto, setContacto] = useState(null);


    useEffect(() => {
        if (id_contacto) {

            const contactData = getContactById(id_contacto); 
            setContacto(contactData);
        } else { setContacto(null);
        }
    }, [id_contacto, getContactById]);

   if (!contacto) {
        return (
            <div className='header_message_hijo'>
                <div className='chatHeader'>
                    <h1 className='titulo_right'>Cargando...</h1>
                </div>
            </div>
        );
    }


    return (
        <div className='header_message_hijo'>  
            <div className='info-group'>
                <button 
                    className='back-arrow-button' 
                    onClick={() => navigate('/')}
                >
                    <i className="bi bi-arrow-left-short"></i>
                </button>

                <img 
                    className="contacto_foto" 
                    src={"/" + contacto.profile_img || "/maria.jpg"}
                    alt={`Foto de ${contacto.name}`} 
                />
            </div>
            <div className='chatHeader'>
                <h1 className='titulo_right'>{contacto.name}</h1>
            </div>
            
        </div>
    );
}

export default ChatHeader;