import DojoText from '../2-molecules/DojoText';
import Garden from '../2-molecules/Garden';
import { motion } from 'framer-motion';

const Dojo = () => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className='bg-white '
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{ type: 'linear' }}
    >
      <div className='container py-2 mx-auto'>
        <h1 className='font-bold md:text-8xl text-6xl  text-center text-shuuenkan-blue mt-2'>
          IL DOJO
        </h1>
      </div>
      <div className=' mx-auto rounded-md'>
        <DojoText />
        <Garden />
      </div>
    </motion.div>
  );
};

export default Dojo;
