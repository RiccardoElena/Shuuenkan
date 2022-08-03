import Kendo from '../components/3-organism/Kendo';
import Dojo from '../components/3-organism/Dojo';
import Hero from '../components/3-organism/Hero';
import Main from '../components/4-layouts/Main';
import styles from '../styles/Home.module.css';
import ContentMenu from '../components/3-organism/ContentMenu';

export default function Home() {
  return (
    <Main>
      <section id='hero'>
        <Hero />
      </section>
      <section id='menu'>
        <Kendo />
      </section>
    </Main>
  );
}
