import Link from 'next/link';
import Button from '../1-atoms/Button';

const KendoText = () => {
  //const [hover, setHover] = useState(false);
  return (
    <>
      <h1 className='pb-5 px-5 mx-auto text-left text-4xl font-bold text-white'>
        Lo scopo della pratica del Kendo
      </h1>
      <Link href='kendo'>
        <p className='px-10 pb-4 text-left text-xl italic text-pearl hover:text-white leading-loose'>
          Lo scopo della pratica del Kendo è: <br />
          Plasmare la mente e il corpo,
          <br />
          coltivare uno spirito vigoroso,
          <br />
          e, attraverso un corretto e severo addestramento, sforzarsi di
          progredire nell'arte del Kendo, <br />
          tenere in considerazione la cortesia e l'onore, <br />
          associarsi agli altri con sincerità, <br />
          e perseguire sempre il miglioramento di se stesso. <br />
          In questo modo si sarà capaci di: <br />
          amare il proprio Paese e la Società, <br />
          Contribuire allo sviluppo della cultura <br />e promuovere la pace e
          la prosperità tra i popoli.
          <p className='py-5 text-base text-white'>
            20 Marzo 1975 Zennihon Kendo Renmei (ZNKR)
          </p>
          <Button text='Scopri di più' reverse={true} />
        </p>
      </Link>
    </>
  );
};

export default KendoText;
