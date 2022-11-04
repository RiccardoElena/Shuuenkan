import { motion } from 'framer-motion';

import DojoText from '../2-molecules/DojoText';
import Garden from '../2-molecules/Garden';

const Dojo = () => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="bg-white "
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}>
      <div className="container mx-auto py-2">
        <h1 className="mt-2 text-center text-6xl  font-bold text-shuuenkan-blue md:text-8xl">
          IL DOJO
        </h1>
      </div>
      <div className=" mx-auto rounded-md">
        <DojoText />
        <Garden />
      </div>
    </motion.div>
  );
};

export default Dojo;
