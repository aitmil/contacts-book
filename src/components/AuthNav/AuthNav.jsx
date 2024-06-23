import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authWrapper}>
      <NavLink
        className={css.login}
        to='/login'
      >
        Login
      </NavLink>
      <div className={css.registerWrapper}>
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
