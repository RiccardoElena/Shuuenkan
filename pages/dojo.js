import Banner from '../components/3-organism/Banner';
import Dojo from '../components/3-organism/Dojo';
import Main from '../components/4-layouts/Main';

import heroImage from '../public/images/dojo.jpeg';

const DojoPage = () => {
  return (
    <Main secondTitle="Kendo CIK al centro di Napoli">
      <section id="hero">
        <Banner alt="Dojo" src={heroImage} />
      </section>
      <section id="content">
        <Dojo />
      </section>
    </Main>
  );
};

export default DojoPage;
