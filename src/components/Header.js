import style from './Header.module.css';

const Header = () => (
  <header className={style.headerContainer}>
    <a href="###" className={style.logo}>Math Magicians</a>
    <ul className={style.navLinksContainer}>
      <li className={style.navLink}><a href="###">Home</a></li>
      <li className={style.navLink}><a href="###">Calculator</a></li>
      <li className={style.navLink}><a href="###">Quote</a></li>
    </ul>
  </header>
);

export default Header;
