import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .min(10, 'Email is too short - should be 10 chars minimum')
    .required('No email provided'),
  password: Yup.string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .catch(() => {
        toast.error('Authorization error! Please try again.');
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ContactSchema}
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
        <ErrorMessage
          className={css.error}
          name='email'
          component='span'
        />
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type='password'
            name='password'
          ></Field>
        </label>
        <ErrorMessage
          className={css.error}
          name='password'
          component='span'
        />
        <button
          className={css.btn}
          type='submit'
        >
          Login
        </button>
      </Form>
    </Formik>
  );
}
