import Main from '../components/4-layouts/Main';
import Banner from '../components/3-organism/Banner';
import Dojo from '../components/3-organism/Dojo';
import heroImage from '../public/dojo.jpeg';

const DojoPage = () => {
  return (
    <Main>
      <section id='hero'>
        <Banner alt='Dojo' src={heroImage} />
      </section>
      <section id='content'>
        <Dojo />
      </section>
    </Main>
  );
};

export default DojoPage;
