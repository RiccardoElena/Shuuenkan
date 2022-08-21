import { heroText } from '../../styles/style.module.css';
import Button from '../1-atoms/Button';
import styles from './HeroContent.module.css';

const HeroContent = () => {
  return (
    <div className={`w-full pt-20 mx-20 text-blue ${heroText}`}>
      <h1
        className={`hlg:text-7xl hmd:text-6xl md:text-5xl sm:text-7xl text-6xl font-bold text-left w-fit mx-auto ${styles.lineHeight}`}
      >
        IL CONCETTO DI KENOD
      </h1>
      <p className='lg:text-5xl text-2xl text-left lg:mx-16 tracking-wide mx-8 py-10'>
        {' '}
        Scopo e pratica
      </p>
      <p className='lg:text-4xl text-lg sm:text-xl text-lg md:text-left text-center lg:mx-16 mx-8 pb-16'>
        Lo scopo della pratica del Kendo è:
        <br />
        Plasmare la mente e il corpo,
        <br />
        coltivare uno spirito vigoroso,
        <br />
        e, attraverso un corretto e severo addestramento, sforzarsi di
        progredire nell'arte del kendo, <br />
        tenere in considerazione la cortesia e l'onore,
        <br />
        associarsi agli altri con sincerità <br />
        e perseguire sempre il miglioramento di se stesso. <br />
        In questo modo si sarà capaci di: <br />
        contribuire allo sviluppo della cultura
        <br />e promuovere la pace e la prosperità tra i popoli
      </p>
      <p className='lg:text-xl text-2xl text-right lg:mx-16 tracking-wide mx-8'>
        {' '}
        20 marzo 1975, Zennihon Kendo Renmei (ZNKR)
        <br />
        All Japan Kendo Federation
      </p>
    </div>
  );
};

export default HeroContent;
