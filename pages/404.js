import styles from '../styles/Home.module.css';
import Main from '../components/4-layouts/Main';

const FourOFour = () => {
  return (
    <Main className={`${styles.main}`} secondTitle='404'>
      <h1 className={styles.title}>Coming Soon!</h1>

      <p className={` ${styles.description}`}>
        Questa sezione del sito è ancora in lavorazione.
        <br />
        {' Per aggiornamenti, seguici su'}{' '}
        <a
          className='text-blue hover:text-blue-600'
          href='https://www.instagram.com/shuuenkannapolikendo1965/'
        >
          Instagram
        </a>{' '}
        e{' '}
        <a
          className='text-blue hover:text-blue-600'
          href='https://m.facebook.com/Shuuenkannapolikendo1965/'
        >
          Facebook, <br />
        </a>
        o contattaci telefonicamente clickando{' '}
        <a className='text-blue hover:text-blue-600' href='tel:3349281502'>
          qui
        </a>
        !
      </p>
    </Main>
  );
};

export default FourOFour;
