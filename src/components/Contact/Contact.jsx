import styles from './Contact.module.css';
import clsx from 'clsx';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';

const Contact = ({ name, number, handleDelete }) => {
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
        onClick={handleDelete}
        className={clsx(styles.button, styles.deleteButton)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
