import { heroText } from '../../styles/style.module.css';
import Button from '../1-atoms/Button';
import styles from './HeroContent.module.css';

const HeroContent = () => {
  return (
    <div className={`w-full pt-20 mx-20  text-white ${heroText}`}>
      <p className='text-xl text-left mx-16 py-12'> Chi siamo</p>
      <h1 className={`text-6xl font-bold text-left mx-16 ${styles.lineHeight}`}>
        SHUUENKANDOJO <br />
        NAPOLI KENDO
      </h1>
      <p className='text-2xl text-left mx-16 py-12 pb-30'>
        Lo Shuuenkandojo nasce a Napoli nel 2014 e diventa il primo esperimento
        italiano di Social Kendo.
        <div className='py-16 flex justify-between px-14 pb-40'>
          <Button text='Più Info' reverse={true} />
          <Button text='Social Kendo' reverse={true} />
        </div>
      </p>
    </div>
  );
};

export default HeroContent;
