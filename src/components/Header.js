import { Link } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => (
  <header className={style.headerContainer}>
    <a href="###" className={style.logo}>Math Magicians</a>
    <ul className={style.navLinksContainer}>
      <li className={style.navLink}><Link to="/">Home</Link></li>
      <li className={style.navLink}><Link to="/calculator">Calculator</Link></li>
      <li className={style.navLink}><Link to="/quote">Quote</Link></li>
    </ul>
  </header>
);

export default Header;
