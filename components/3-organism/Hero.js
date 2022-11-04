import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = ({ heroImage, children, imageSettings, width, shift = true }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      className="mt-28 lg:mt-28"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}>
      <div className="fixed -z-10 h-screen w-full overflow-hidden">
        <div
          className={`relative w-full `}
          style={
            shift
              ? { right: `${width < 852 ? `${(852 - width) / 2}px` : ''}` }
              : {}
          }>
          <Image
            alt="Kendo"
            src={heroImage}
            width={imageSettings.width}
            height={imageSettings.height}
            layout={imageSettings.layout}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className=" flex flex-col">{children}</div>
    </motion.div>
  );
};

export default Hero;
