import { useWindowSize } from '../hooks';

import HeroContent from '../components/2-molecules/HeroContent';
import Kendo from '../components/3-organism/Kendo';
import Hero from '../components/3-organism/Hero';
import Federation from '../components/3-organism/Federations';
import Main from '../components/4-layouts/Main';

import heroImage from '../public/images/hero.jpeg';

export default function Home() {
  const { width, height } = useWindowSize();

  const isTablet = width > 767 && width < height;

  const imageSettings = {
    style: {
      width: `100vw`, // Imposta la larghezza
      height: `100vh`, // Imposta l'altezza
      //objectFit: 'cover', // Controlla come l'immagine si adatta alle dimensioni
      maxWidth: '100%',
    },
    width: '852',
    height: '565',
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
    <Main secondTitle="Vieni, Pratichi e Non Paghi">
      <section id="hero">
        <Hero heroImage={heroImage} imageSettings={imageSettings}>
          <HeroContent />
        </Hero>
      </section>
      <section id="menu" className="relative">
        <Kendo />
      </section>
      <section id="federations" className="relative">
        <Federation />
      </section>
    </Main>
  );
}
