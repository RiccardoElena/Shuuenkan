import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../../public/bandiere.png';
import presidentImage from '../../public/president.jpeg';
import Banner from './Banner';
import { motion } from 'framer-motion';

const Hero = () => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };
  return (
    <>
      <Banner alt='Flag Banner' src={heroImage} extraClasses='shadow-lg' />
      <motion.div
        className='container mx-auto rounded-md py-16'
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear' }}
      >
        <h1 className='text-left text-shuuenkan-blue lg:text-7xl xsm:text-6xl text-5xl hlg:mb-5 md:mb-5 mb-10 mx-5'>
          Chi siamo
        </h1>
        <div className={` w-full text-shuuenkan-blue flex flex-wrap md:flex-nowrap`}>
          <div className=' md:my-auto xsm:m-auto m-5 md:pr-20 md:pb-0 pb-10 bg-white w-fit justify-start text-center '>
            <h1 className='pb-10 lg:text-5xl xsm:text-4xl text-3xl text-center'>
              Una Realtà in Evoluzione
            </h1>
            <p className=' lg:text-4xl xsm:text-3xl text-2xl text-center '>
              <p>
                Shuuenkan Napoli Kendo nasce nel 2014 dalla passione di un
                gruppo di ragazzi col sogno di portare il vero Kendo nella città
                di Napoli. Grazie al suo presidente e fondatore Claudio Ibello,
                questa fiamma non si è mai spenta nonostante le mille
                difficoltà, trovando sempre nuovi modi per mantenere vivo il
                Kendo a Napoli e, come la fenice, rinascendo ancora una volta
                dalle proprie ceneri come primo ed unico progetto di{' '}
                <Link href='/projects' passHref>
                  <b className='text-blue-600 hover:text-shuuenkan-blue hover:underline'>
                    Social Kendo Italiano
                  </b>
                </Link>
                !
                <br />
                <p className='text-left pt-10'>
                  <i>
                    &quot;Vien, pràtic&apos; e nun pav&apos;!&quot; <br />{' '}
                    Claudio Ibello, presidente e fondatore dello Shuuenkan
                  </i>
                </p>
              </p>
            </p>
          </div>
          <div className='w-1/3 m-auto justify-end'>
            <Image
              alt='Men in Kendo'
              src={presidentImage}
              layout='responsive'
              className='rounded'
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
