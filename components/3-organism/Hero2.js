import Image from 'next/image';
import heroImage from '../../public/menjungle.jpeg';
import { hero } from '../../styles/style.module.css';
import HeroContent2 from '../2-molecules/HeroContent2';

const Hero = () => {
  return (
    <div className='mt-0 lg:mt-10'>
      <div className=' flex'>
        <div className='w-1/2 m-0 p-0'>
          <Image
            alt='Kendo'
            src={heroImage}
            height={770}
            width={700}
            quality={100}
          />
        </div>
        <div className='md:w-1/2 w-full white m-0 p-0'>
          <HeroContent2 />
        </div>
      </div>
    </div>
  );
};

export default Hero;
