import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink
        className={css.link}
        to='/login'
      >
        Login
      </NavLink>
      <div className={css.container}>
        <p className={css.text}>New user?</p>
        <NavLink
          className={css.link}
          to='/register'
        >
          Start here
        </NavLink>
      </div>
    </div>
  );
}
