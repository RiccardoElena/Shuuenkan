import { useWindowSize } from '../hooks';

import BigQuote from '../components/2-molecules/BigQuote';
import Hero from '../components/3-organism/Hero';
import Attrezzatura from '../components/3-organism/Attrezzatura';
import Main from '../components/4-layouts/Main';

import heroImage from '../public/images/content.jpeg';

const KendoPage = () => {
  const { width, height } = useWindowSize();

  const isTablet = width > 767 && width < height;

  const imageSettings = {
    style: {
      width: `100vw`, // Imposta la larghezza
      height: `100vh`, // Imposta l'altezza
      //objectFit: 'cover', // Controlla come l'immagine si adatta alle dimensioni
      maxWidth: '100%',
    },
    width: '640',
    height: '960',
  };

  if (isTablet) {
    imageSettings.width = '1778px';
    imageSettings.height = '1180px';
  } else if (width > 852) {
    imageSettings.style = {
      maxWidth: '100%',
      height: 'auto',
      maxWidth: '100%',
      width: '100%',
      objectFit: 'cover',
    };
    imageSettings.width = '';
    imageSettings.height = '';
  }
  return (
    <Main secondTitle="L'arte dei Samurai">
      <section id="hero">
        <Hero heroImage={heroImage} imageSettings={imageSettings}>
          <BigQuote />
        </Hero>
      </section>
      <section id="hero" className="relative">
        <Attrezzatura />
      </section>
    </Main>
  );
};

export default KendoPage;
