// This eslint disable is for the p element
/* eslint-disable max-len */
import Header from '../components/Header';
import style from './Home.module.css';

const HomeDisplay = () => (
  <>
    <Header />
    <div className={style.Container}>
      <h1 className={style.homeTitle}>Welcome to our page!</h1>
      <p className={style.welcomeText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit arcu id pellentesque convallis. Maecenas rhoncus turpis molestie fringilla consequat. Donec sagittis quam id tristique commodo. Fusce eros massa, pellentesque sit amet nunc a, eleifend posuere dui. Quisque efficitur nunc eu mi efficitur, nec placerat augue eleifend. Nam ligula ipsum, sodales vitae mauris at, interdum accumsan sem. In mollis rhoncus tortor, vel viverra erat iaculis eu. Aliquam erat volutpat. Cras maximus magna et nibh sagittis, eget consequat mi iaculis. Donec at dui eu tortor egestas dictum. Donec at neque felis. Proin dignissim lorem mattis, hendrerit dolor nec, pharetra nibh.
        <br />
        <br />
        Ut pellentesque purus sed libero elementum euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum, arcu sed eleifend cursus, nisi elit consequat sem, ut condimentum tortor dolor id massa. Nullam posuere cursus rhoncus. Vestibulum blandit lobortis lacinia. Maecenas quis rutrum massa. Curabitur posuere nec nisi ut fermentum. Praesent quis semper tortor, in hendrerit turpis. In eleifend urna nisl, nec posuere arcu placerat sit amet.

      </p>
    </div>
  </>
);

export default HomeDisplay;
