import Image from 'next/image';
import fundImage from '../../public/fundLogo.png';
import tenguiImage from '../../public/tengui.jpeg';
import { motion } from 'framer-motion';
import Card from '../2-molecules/Card';

const Content = () => {
  const items = [
    {
      key: 1,
      src: fundImage,
      alt: 'GoFundMe Logo',
      title: 'Fundrising',
      text: (
        <p className='text-4xl'>
          Partecipa al nostro progetto di fundrising con l&apos;obbiettivo di
          sostituire la pavimentazione del dojo in parquet, modificare le porte
          e gli infissi deteriorati, rinnovare gli spogliatoi,facilitare
          l&apos;aquisto di attrezzature per chi non possa permettersene delle
          proprie e acquistare dei bogu per i bambini
          <br />
        </p>
      ),
      btnProps: { btnText: 'Dona ora!', href: 'https://gofund.me/12c1d74f' },
    },
    {
      key: 2,
      src: tenguiImage,
      alt: 'Original Tengui Artwork',
      title: 'Tengui',
      text: (
        <p className='text-4xl'>
          Vendita Tengui e Altri accessori per il Kendo!
          <br />
        </p>
      ),
      btnProps: { btnText: 'Acquista Ora', href: '/shop' },
      imgSize: 'w-full',
      extraClasses: ' ',
    },
  ];
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.9 } },
    exit: { opacity: 0 },
  };

  return (
    <>
      <div className='lg:pt-36 pt-28 blue'>
        <div className='blue container xl:py-36 hlg:py-32 lg:py-36 hmd:py-24 md:py-20 sm:py-16 xsm:py-12 py-8 mx-auto'>
          <div className='w-full float-center'>
            <motion.p
              className=' text-8xl text-center text-pearl p-10'
              variants={variants} // Pass the variant object into Framer Motion
              initial='hidden' // Set the initial state to variants.hidden
              animate='enter' // Animated state to variants.enter
              exit='exit' // Exit state (used later) to variants.exit
              transition={{ type: 'linear' }} // Set the transition to linear
            >
              Lo <b className='text-white'>Shuuenkandojo</b> presenta il{' '}
              <b className='text-white'>primo e unico</b> progetto di kendo
              <b className='text-white'> gratuito </b> in Italia!
            </motion.p>
          </div>
        </div>
      </div>
      <div className='container flex flex-wrap mx-auto rounded-md py-40'>
        <div className='container mx-auto pb-20 '>
          <h1 className='text-center text-5xl text-blue'>
            La diffusione gratuita del kendo è sostenuta dai nostri molteplici
            progetti di raccolta fondi reinvestiti al 100%
          </h1>
        </div>
        {items.map((item) => (
          <Card
            key={item.key}
            src={item.src}
            title={item.title}
            text={item.text}
            btn={true}
            btnProps={item.btnProps}
            alt={item.alt}
            imgSize={item.imgSize}
            extraClasses={item.extraClasses}
          />
        ))}
      </div>
    </>
  );
};

export default Content;
