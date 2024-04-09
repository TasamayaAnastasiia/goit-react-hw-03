import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import ObjContacts from './ContactList.json';

function App() {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(savedContacts || ObjContacts);
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
