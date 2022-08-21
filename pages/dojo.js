import Main from '../components/4-layouts/Main';
import Hero3 from '../components/3-organism/Hero3';
import Dojo from '../components/3-organism/Dojo';

const Kendo = () => {
  return (
    <Main>
      <section id='hero'>
        <Hero3 />
      </section>
      <section id='hero'>
        <Dojo />
      </section>
    </Main>
  );
};

export default Kendo;
