import Image from 'next/image';
import heroImage from '../../public/hero.jpeg';
import { hero } from '../../styles/style.module.css';
import HeroContent from '../2-molecules/HeroContent';

const Hero = () => {
  return (
    <div className='mt-28 lg:mt-36'>
      <div className={` ${hero}`}>
        <Image alt='Kendo' src={heroImage} layout='fill' quality={100} />
      </div>
      <div className=' flex flex-col'>
        <div className='md:w-1/2 w-full blueOpacity'>
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
