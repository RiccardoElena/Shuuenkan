import Kendo from '../components/3-organism/Kendo';
import Hero from '../components/3-organism/Hero';
import Main from '../components/4-layouts/Main';
import heroImage from '../public/hero.jpeg';
import Federation from '../components/3-organism/Federations';
import { useWindowSize } from '../hooks';
import HeroContent from '../components/2-molecules/HeroContent';

export default function Home() {
  const { width, height } = useWindowSize();

  console.log(width);
  console.log(height);

  const isTablet = width > 767 && width < height;

  const imageSettings = { layout: 'fixed', width: '852', height: '565' };

  if (isTablet) {
    imageSettings.width = '1778px';
    imageSettings.height = '1180px';
  } else if (width > 852) {
    imageSettings.layout = 'responsive';
    imageSettings.width = '';
    imageSettings.height = '';
  }
  return (
    <Main>
      <section id='hero'>
        <Hero heroImage={heroImage} imageSettings={imageSettings} width={width}>
          <HeroContent />
        </Hero>
      </section>
      <section id='menu'>
        <Kendo />
      </section>
      <section id='federations'>
        <Federation />
      </section>
    </Main>
  );
}
