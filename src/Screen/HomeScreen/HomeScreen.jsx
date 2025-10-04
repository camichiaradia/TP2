import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'

const HomeScreen = () => {
  return (
    <div className='contenedor-contactList'>
        <div className='contenedor-list'>
            <ContactList/>
        </div>
    </div>
  )
}

export default HomeScreen
