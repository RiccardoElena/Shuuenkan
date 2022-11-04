import Main from '../components/4-layouts/Main';

const FourOFour = () => {
  return (
    <Main className='flex flex-col min-h-screen justify-center items-center py-16' secondTitle='404'>
      <h1 className='text-7xl leading-5'>Coming Soon!</h1>

      <p className='text-2xl leading-6 my-16 text-center'>
        Questa sezione del sito è ancora in lavorazione.
        <br />
        {' Per aggiornamenti, seguici su'}{' '}
        <a
          className='text-shuuenkan-blue hover:text-blue-600'
          href='https://www.instagram.com/shuuenkannapolikendo1965/'
        >
          Instagram
        </a>{' '}
        e{' '}
        <a
          className='text-shuuenkan-blue hover:text-blue-600'
          href='https://m.facebook.com/Shuuenkannapolikendo1965/'
        >
          Facebook, <br />
        </a>
        o contattaci telefonicamente clickando{' '}
        <a className='text-shuuenkan-blue hover:text-blue-600' href='tel:3349281502'>
          qui
        </a>
        !
      </p>
    </Main>
  );
};

export default FourOFour;
