import Image from 'next/legacy/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Banner from './Banner';

import heroImage from '../../public/images/bandiere.png';
import presidentImage from '../../public/images/president.jpeg';

const Hero = () => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };
  return (
    <>
      <Banner alt="Flag Banner" src={heroImage} extraClasses="shadow-lg" />
      <motion.div
        className="container mx-auto rounded-md py-16"
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}>
        <h1 className="mx-5 mb-10 text-left text-5xl text-shuuenkan-blue xsm:text-6xl md:mb-5 lg:text-7xl hlg:mb-5">
          Chi siamo
        </h1>
        <div
          className={` flex w-full flex-wrap text-shuuenkan-blue md:flex-nowrap`}>
          <div className=" m-5 w-fit justify-start bg-white pb-10 text-center xsm:m-auto md:my-auto md:pr-20 md:pb-0 ">
            <h1 className="pb-10 text-center text-3xl xsm:text-4xl lg:text-5xl">
              Una Realtà in Evoluzione
            </h1>
            <p className=" text-center text-2xl xsm:text-3xl lg:text-4xl ">
              Shuuenkan Napoli Kendo nasce nel 2014 dalla passione di un gruppo
              di ragazzi col sogno di portare il vero Kendo nella città di
              Napoli. Grazie al suo presidente e fondatore Claudio Ibello,
              questa fiamma non si è mai spenta nonostante le mille difficoltà,
              trovando sempre nuovi modi per mantenere vivo il Kendo a Napoli e,
              come la fenice, rinascendo ancora una volta dalle proprie ceneri
              come primo ed unico progetto di{' '}
              <Link href="/projects" passHref legacyBehavior>
                <b className="text-blue-600 hover:text-shuuenkan-blue hover:underline">
                  Social Kendo Italiano
                </b>
              </Link>
              !
              <br />
            </p>
            <p className="pt-10 text-left text-2xl xsm:text-3xl lg:text-4xl">
              <i>
                &quot;Vien, pràtic&apos; e nun pav&apos;!&quot; <br /> Claudio
                Ibello, presidente e fondatore dello Shuuenkan
              </i>
            </p>
          </div>
          <div className="m-auto w-1/3 justify-end">
            <Image
              alt="Men in Kendo"
              src={presidentImage}
              layout="responsive"
              className="rounded"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
