import React, { useState } from 'react';
import "./BarraBuscardor.css";

const initialContacts = [
  { id: 1, name: "María" },
  { id: 2, name: "Lautaro" },
  { id: 3, name: "Patricio" },
  { id: 4, name: "Gisela" },
];

const ContactSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContacts = initialContacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={styles.container}>
            <div style={styles.searchBarContainer}>
                <span style={styles.searchIcon}>🔎</span>
                <input
                type="text"
                placeholder="Buscar contactos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
                />
            </div>

            <ul style={styles.contactList}>
                {filteredContacts.map(contact => (
                <li key={contact.id} style={styles.contactItem}>
                    {contact.name}
                </li>
                ))}
                {filteredContacts.length === 0 && (
                <li style={styles.noResults}>No se encontraron contactos.</li>
                )}
            </ul>
        </div>
    );
}

export default ContactSearch