import Main from '../components/4-layouts/Main';
import Hero from '../components/3-organism/Hero';
import heroImage from '../public/images/content.jpeg';
import Attrezzatura from '../components/3-organism/Attrezzatura';
import { useWindowSize } from '../hooks';
import BigQuote from '../components/2-molecules/BigQuote';

const KendoPage = () => {
  const { width, height } = useWindowSize();

  console.log(width);
  console.log(height);

  const imageSettings = { layout: 'responsive', width: '', height: '' };

  if (width > 852 && width > height) {
    imageSettings.layout = 'fixed';
    imageSettings.width = '1440';
    imageSettings.height = '2160';
  }
  return (
    <Main secondTitle="L'arte dei Samurai">
      <section id='hero'>
        <Hero heroImage={heroImage} imageSettings={imageSettings} shift={false}>
          <BigQuote />
        </Hero>
      </section>
      <section id='hero'>
        <Attrezzatura />
      </section>
    </Main>
  );
};

export default KendoPage;
