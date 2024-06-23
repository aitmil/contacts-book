import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
