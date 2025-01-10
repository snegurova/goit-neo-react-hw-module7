import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import styles from './ContactForm.module.css';

const ContactForm = ({ handleAddContact }) => {
  const initialValues = { name: '', number: '' };
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Name is required'),
    number: Yup.string().required('Number is required'),
  });
  const handleSubmit = (values, { resetForm }) => {
    handleAddContact(values);
    resetForm();
  };
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <label htmlFor={nameId} className={styles.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameId} className={styles.input} />
        <ErrorMessage name="name" component="p" className={styles.error} />
        <label htmlFor={numberId} className={styles.label}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={numberId}
          className={styles.input}
        />
        <ErrorMessage name="number" component="p" className={styles.error} />
        <button type="submit" className={clsx(styles.button, styles.addButton)}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
