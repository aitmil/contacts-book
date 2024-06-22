import { NavLink } from 'react-router-dom';
import { FaHandHoldingHeart } from 'react-icons/fa';
import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={css.container}>
      <PageTitle>
        Phonebook manager welcome page <FaHandHoldingHeart />
      </PageTitle>
      <p className={css.text}>
        To get started, please <NavLink to='/login'>login</NavLink> !
      </p>
    </main>
  );
}
