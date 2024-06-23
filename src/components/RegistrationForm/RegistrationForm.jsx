import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form
        className={css.form}
        autoComplete='off'
      >
        <label className={css.label}>
          Email
          <Field
            className={css.input}
            type='email'
            name='email'
          ></Field>
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type='password'
            name='password'
          ></Field>
        </label>
        <button
          className={css.btn}
          type='submit'
        >
          Sign up
        </button>
      </Form>
    </Formik>
  );
}
