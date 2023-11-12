import Image from "next/image";
import { motion } from 'framer-motion';

const Banner = ({ alt, src, extraClasses = ' ' }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      className="mt-28 lg:mt-36"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}>
      <div className=" flex">
        <div className={`m-0 h-fit w-full p-0 ${extraClasses}`}>
          <Image
            alt={alt}
            src={src}
            quality={100}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
