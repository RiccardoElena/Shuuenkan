import Map from '../components/3-organism/Map';

import Main from '../components/4-layouts/Main';

import Contacts from '../components/3-organism/Contacts';

export default function Home() {
  return (
    <Main>
      <section id='map'>
        <Map />
      </section>
      <section id='menu'>
        <Contacts />
      </section>
    </Main>
  );
}