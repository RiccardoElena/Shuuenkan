import Progetti from '../components/3-organism/Progetti';
import Main from '../components/4-layouts/Main';

export default function Home() {
  return (
    <Main secondTitle="Kendo Gratis Per il Sociale">
      {' '}
      <section id="progetti">
        <Progetti />
      </section>
    </Main>
  );
}
