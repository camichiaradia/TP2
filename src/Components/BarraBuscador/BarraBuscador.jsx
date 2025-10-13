import React, { useState } from 'react';


const initialContacts = [
  { id: 1, name: "María" },
  { id: 2, name: "Lautaro" },
  { id: 3, name: "Patricio" },
  { id: 4, name: "Gisela" },
];


const styles = {
    container: {
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    searchBarContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 10px',
        border: '1px solid #ccc',
        borderRadius: '20px', // Forma redondeada tipo WhatsApp
        marginBottom: '15px',
        backgroundColor: '#f0f0f0',
    },
    searchIcon: {
        marginRight: '8px',
        color: '#888',
        fontSize: '18px',
    },
    searchInput: {
        border: 'none',
        outline: 'none',
        flexGrow: 1,
        padding: '5px 0',
        backgroundColor: 'transparent',
        fontSize: '16px',
    },
    contactList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    contactItem: {
        padding: '10px 5px',
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
    },
    noResults: {
        padding: '10px 5px',
        color: '#888',
        textAlign: 'center',
    }
};

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

export default ContactSearch;