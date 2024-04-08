import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm.jsx';
import ContactList from './Components/ContactList/ContactList.jsx';
import SearchBox from './Components/SearchBox/SearchBox.jsx';
import ObjContacts from './ContactList.json';

function App() {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(savedContacts.length === 0 ? ObjContacts : savedContacts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    JSON.parse(localStorage.getItem('contacts'));
  })

const handleSearch = (e) => setSearch(e.target.value) 
const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));
const deleteContact = (id) => setContacts(contacts.filter(contact => contact.id !== id));
const addContact = (newContact) => { setContacts([...contacts, newContact])}

useEffect(() => { localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);


  return (
    <div className='container'>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact}/>
        <SearchBox onSearch={handleSearch}/>
        <ContactList list={filteredContacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App;
