import { heroText } from '../../styles/style.module.css';
import Button from '../1-atoms/Button';
import styles from './HeroContent.module.css';

const HeroContent = () => {
  return (
    <div className={`w-full pt-20 mx-20  text-white ${heroText}`}>
      <p className='lg:text-2xl text-xl text-left lg:mx-16 mx-8 py-12'>
        {' '}
        Chi siamo
      </p>
      <h1
        className={`hlg:text-7xl hmd:text-6xl md:text-5xl sm:text-7xl text-6xl font-bold text-left w-fit mx-auto ${styles.lineHeight}`}
      >
        SHUUENKANDOJO <br />
        NAPOLI KENDO
      </h1>
      <p className='lg:text-2xl text-xl sm:text-2xl md:text-left text-center lg:mx-16 mx-8 py-12 pb-30'>
        Lo Shuuenkandojo nasce a Napoli nel 2014 e diventa il primo esperimento
        italiano di Social Kendo.
        <div className='py-16 flex justify-between md:mx-auto sm:mx-14 mx-auto pb-40'>
          <Button text='Più Info' reverse={true} />
          <Button text='Social Kendo' reverse={true} />
        </div>
      </p>
    </div>
  );
};

export default HeroContent;
