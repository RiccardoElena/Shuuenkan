import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.9 } },
  exit: { opacity: 0 },
};

const FlatHero = ({ children, fontSize }) => {
  return (
    <div className={`h-screen content-center bg-shuuenkan-blue pt-32 lg:pt-40`}>
      <div className="md:py-15 container mx-auto h-fit bg-shuuenkan-blue ">
        <div className="float-center w-full">
          <motion.p
            className={` px-5 pb-8 text-center text-pearl md:p-10 ${fontSize}`}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}>
            {children}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default FlatHero;
