import { heroText } from '../../styles/style.module.css';
import Button from '../1-atoms/Button';
import styles from './HeroContent.module.css';

const HeroContent = () => {
  return (
    <div className='md:w-1/2 w-full blueOpacity'>
      <div className={`w-full hlg:pt-20 pt-7 mx-20  text-white ${heroText}`}>
        <p className='lg:text-2xl text-xl text-left lg:mx-16 mx-8 md:py-12 py-5'>
          {' '}
          Chi siamo
        </p>
        <h1
          className={`xl:text-8xl hmd:text-7xl md:text-6xl sm:text-8xl xsm:text-6xl text-5xl font-bold sm:text-left text-center w-fit mx-auto ${styles.lineHeight}`}
        >
          SHUUENKANDOJO <br />
          NAPOLI KENDO &<br />
          NAGINATA
        </h1>
        <p className='lg:text-2xl text-xl sm:text-2xl md:text-left text-center lg:mx-16 mx-8 sm:py-12 py-0 pb-26'>
          Lo Shuuenkandojo nasce a Napoli nel 2014 e diventa il primo
          esperimento italiano di Kendo gratuito!
          <div className='py-16 flex justify-between md:mx-auto sm:mx-14 mx-auto md:pb-40 pb-5'>
            <Button text='Più Info' reverse={true} href='/about' />
            <Button text='Social Kendo' reverse={true} href='/projects' />
          </div>
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
