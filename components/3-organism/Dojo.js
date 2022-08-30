import Image from 'next/image';
import dojoImage from '../../public/dojo.jpeg';
import DojoText from '../2-molecules/DojoText';

const Dojo = () => {
  return (
    <div className='bg-white '>
      <div className='container py-2 mx-auto'>
        <h1 className='font-bold text-6xl text-center text-blue '>IL DOJO</h1>
      </div>
      <div className='container mx-auto rounded-md'>
        <DojoText />
      </div>
    </div>
  );
};

export default Dojo;
