import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button
        className={css.btn}
        type={css.button}
        onClick={() => {
          dispatch();
        }}
      >
        Logout
      </button>
    </div>
  );
}
