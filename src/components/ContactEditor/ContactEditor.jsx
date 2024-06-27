import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import css from './ContactEditor.module.css';
import { addContact } from '../../redux/contacts/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short - should be 3 chars minimum')
    .max(13, 'Name is too long - should be 13 chars minimum')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be 10 digits')
    .required('Required'),
});

export default function ContactForm() {
  const initialValues = { name: '', number: '' };
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully added to your phonebook!');
      })
      .catch(() => {
        toast.error('Something went wrong. Try again!');
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={css.input}
            name='name'
            id={`${fieldId}-name`}
          />
          <ErrorMessage
            className={css.error}
            name='name'
            component='span'
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={css.input}
            name='number'
            id={`${fieldId}-number`}
          />
          <ErrorMessage
            className={css.error}
            name='number'
            component='span'
          />
        </div>

        <button
          type='submit'
          className={css.btn}
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
