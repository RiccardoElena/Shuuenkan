import Image from 'next/image';
import dojoImage from '../../public/dojo.jpeg';
import DojoText from '../2-molecules/DojoText';
import { image, centered } from './Dojo.module.css';

const Dojo = () => {
  return (
    <div className='bg-white  '>
      <div className='container py-10 mx-auto'>
        <h1 className='font-bold text-6xl text-center text-blue '>IL DOJO</h1>
      </div>
      <div className='container mx-auto rounded-md'>
        <DojoText />
      </div>
    </div>
  );
};

export default Dojo;
