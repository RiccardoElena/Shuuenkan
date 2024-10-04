import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = ({ heroImage, children, imageSettings }) => {
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
      <div className="fixed -z-50 h-screen w-full overflow-hidden">
        <Image
          alt="Kendo"
          src={heroImage}
          width={imageSettings.width}
          height={imageSettings.height}
          //layout={imageSettings.layout}
          quality={100}
          priority
          style={imageSettings.style}
        />
      </div>
      <div className=" flex flex-col">{children}</div>
    </motion.div>
  );
};

export default Hero;
