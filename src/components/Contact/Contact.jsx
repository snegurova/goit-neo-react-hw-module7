import styles from './Contact.module.css';
import clsx from 'clsx';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div className={styles.infoWrapper}>
          <FaUser size={16} />
          <span>{name}</span>
        </div>
        <div className={styles.infoWrapper}>
          <FaPhone size={16} />
          <span>{number}</span>
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={clsx(styles.button, styles.deleteButton)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
