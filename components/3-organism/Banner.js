import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = ({ alt, src, extraClasses = ' ' }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      className='mt-28 lg:mt-36'
      variants={variants} // Pass the variant object into Framer Motion
      initial='hidden' // Set the initial state to variants.hidden
      animate='enter' // Animated state to variants.enter
      exit='exit' // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
    >
      <div className=' flex'>
        <div className={`w-full h-fit m-0 p-0 ${extraClasses}`}>
          <Image
            alt={alt}
            src={src}
            layout='responsive'
            quality={100}
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
