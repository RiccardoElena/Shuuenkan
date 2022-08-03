import Image from 'next/image';
import dojoImage from '../../public/dojo.jpeg';
import DojoText from '../2-molecules/DojoText';
import { image, centered } from './Dojo.module.css';

const Content = () => {
  return (
    <div
      className='bg-white py-20 -mt-36'
      style={{ clipPath: 'polygon(0 0, 100% 11%, 100% 100%, 0% 100%)' }}
    >
      <div className='container py-10 mx-auto'>
        <div className='w-1/2 float-left'>
          <h1 className='font-bold text-6xl text-center text-blue pb-10'>
            Il Dojo
          </h1>
        </div>
      </div>
      <div className='container flex mx-auto rounded-md'>
        <div className={`m-auto w-full ${image}`}>
          <Image
            alt='Kamiza'
            src={dojoImage}
            layout='responsive'
            style={{ borderRadius: '6px 6px 6px 6px' }}
          />

          <div className={`w-3/4 pt-10 ${centered} rounded-md pearlOpacity`}>
            <DojoText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
