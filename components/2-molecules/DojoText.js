import Link from 'next/link';
import Button from '../1-atoms/Button';

const KendoText = () => {
  //const [hover, setHover] = useState(false);
  return (
    <>
      <h1 className='p-2 px-5 mx-auto text-left text-4xl font-bold text-blue'>
        Lo Shuuenkandojo
      </h1>

      <p className='px-10 pb-4 text-centered text-2xl  text-blue leading-loose'>
        Dalla sua nascita, nell'anno 2014, il nostro dojo si afferma come prima
        e unica realtà di Kendo della Confederazione Italiana (CIK) a Napoli e
        provincia, fregiandosi dell'onore di aver ospitato numerosi maestri, tra
        cui:
        <br />
        <b>Hiroshi Alexander Kimura</b>, 7 Dan Kyoshi;
        <br />
        <b>Donatella Castelli</b>, primo 7 Dan Renshi femminile europeo;
        <br />
        <b>Jindra Ziegelheim</b>, 6 Dan Renshi;
        <br />
        <b>Franco Sarra</b>, uno dei fondatori della CIK;
        <br />
        Ha organizzato inoltre, col patrocinio del comune grazie all'ex
        assessore allo sport Ciro Borriello il primo "Donatella and Friends" e i
        primi esami per il passaggio di grado (da primo Kyu a secondo Dan) CIK
        del meriodone non insulare. Organizza inoltre a Gaeta, in onore del
        primo maestro ad insegnare Kendo in Italia,{' '}
        <b>Hiroshi Alexander Kimura</b>, il "Kimura and Friends", permettendo
        l'incontro del maestro con tutti i suoi vecchi amici italiani.
      </p>
    </>
  );
};

export default KendoText;
