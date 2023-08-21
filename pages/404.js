import Main from '../components/4-layouts/Main';

const FourOFour = () => {
  return (
    <Main
      className="flex min-h-screen flex-col items-center justify-center py-16"
      secondTitle="404">
      <h1 className="text-7xl leading-5">Coming Soon!</h1>

      <p className="my-16 text-center text-2xl leading-6">
        Questa sezione del sito <b>non esiste</b> o{' '}
        <b>è ancora in lavorazione</b>.
        <br />
        {' Per aggiornamenti, seguici su'}{' '}
        <a
          className="text-shuuenkan-blue hover:text-blue-600"
          href="https://www.instagram.com/shuuenkannapolikendo1965/">
          Instagram
        </a>{' '}
        e{' '}
        <a
          className="text-shuuenkan-blue hover:text-blue-600"
          href="https://m.facebook.com/Shuuenkannapolikendo1965/">
          Facebook, <br />
        </a>
        o contattaci telefonicamente clickando{' '}
        <a
          className="text-shuuenkan-blue hover:text-blue-600"
          href="tel:3349281502">
          qui
        </a>
        !
      </p>
    </Main>
  );
};

export default FourOFour;
