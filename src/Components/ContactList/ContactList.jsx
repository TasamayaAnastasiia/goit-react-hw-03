import Contact from '../Contact/Contact.jsx';
import style from './ContactList.module.css';

const ContactList = ({list, onDelete}) => {
    return (
       <ul className={style.listContacts}>
            {
                list.map(contact => (
                    <li key={contact.id}><Contact list={contact} onClean={onDelete}/></li>
                ))
            }
       </ul>
    );
}
export default ContactList;