import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={styles.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
