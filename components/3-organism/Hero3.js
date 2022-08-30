import Image from 'next/image';
import heroImage from '../../public/dojo.jpeg';
import Dojo from './Dojo';
import { hero } from '../../styles/style.module.css';
import HeroContent2 from '../2-molecules/HeroContent2';

const Hero = () => {
  return (
    <div className='mt-28 lg:mt-36'>
      <div className=' flex'>
        <div className='w-full h-fit m-0 p-0'>
          <Image
            alt='Kendo'
            src={heroImage}
            layout='responsive'
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
