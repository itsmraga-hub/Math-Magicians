/* eslint-disable max-len */
import Header from '../components/Header';
import style from './Quote.module.css';

const Quote = () => (
  <>
    <Header />
    <div className={style.Container}>
      <p className={style.quoteText}>Mathematics is not about numbers, equations, computations or algorithms: It is about understanding. - William Paul Thurston</p>
    </div>
  </>
);

export default Quote;
