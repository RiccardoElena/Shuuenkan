import Image from 'next/image';

import { motion } from 'framer-motion';

import { AnimationContext } from '../../pages/_app';

import { hero } from '../../styles/style.module.css';

const Hero = ({ heroImage, children, imageSettings, width, shift = true }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      className='mt-28 lg:mt-28'
      variants={variants} // Pass the variant object into Framer Motion
      initial='hidden' // Set the initial state to variants.hidden
      animate='enter' // Animated state to variants.enter
      exit='exit' // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
    >
      <div className={` ${hero} w-full `}>
        <div
          className={`w-full relative `}
          style={
            shift
              ? { right: `${width < 852 ? `${(852 - width) / 2}px` : ''}` }
              : {}
          }
        >
          <Image
            alt='Kendo'
            src={heroImage}
            width={imageSettings.width}
            height={imageSettings.height}
            layout={imageSettings.layout}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className=' flex flex-col'>{children}</div>
    </motion.div>
  );
};

export default Hero;
