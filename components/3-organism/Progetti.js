import naginataImage from '../../public/senseiCarlini.jpeg';
import fundImage from '../../public/fundLogo.png';
import tenuguiImage from '../../public/tengui.jpeg';
import { motion } from 'framer-motion';
import Card from '../2-molecules/Card';
import Link from 'next/link';

const Content = () => {
  const items = [
    {
      key: 1,
      src: fundImage,
      alt: 'GoFundMe Logo',
      title: 'Fundrising',
      text: (
        <p className='md:text-4xl sm:text-3xl text-2xl'>
          Partecipa al nostro progetto di fundrising con l&apos;obbiettivo di
          sostituire la pavimentazione del dojo in parquet, modificare le porte
          e gli infissi deteriorati, rinnovare gli spogliatoi,facilitare
          l&apos;aquisto di attrezzature per chi non possa permettersene delle
          proprie e acquistare dei bogu per i bambini
          <br />
        </p>
      ),
      btnProps: { btnText: 'Dona ora!', href: 'https://gofund.me/12c1d74f' },
      id: 'fundrising',
    },
    {
      key: 2,
      src: naginataImage,
      alt: 'Sensei Carlini Image',
      title: 'Project Naginata',
      text: (
        <p className='md:text-4xl sm:text-3xl text-2xl'>
          A partire da quest&apos;anno lo Shuuenkandojo propone un nuovo
          progetto di disciplina marziale, la <b>Naginata do</b>, sotto la
          sapiente guida di sensei Stefano Carlini (detto Nonno Naginata),{' '}
          <b>3 Dan di Naginata </b> e <b>Nazionale Italiano</b> per la sezione
          di Naginata della CIK.
          <br />
        </p>
      ),
      btnProps: {
        btnText: 'Scopri la Naginata',
        href: '/naginata',
      },
      tag: Link,
      id: 'naginata',
    },
    {
      key: 3,
      src: tenuguiImage,
      alt: 'Original Tenugui Artwork',
      title: 'Tenugui',
      text: (
        <p className='md:text-4xl sm:text-3xl text-2xl'>
          Vendita Tenugui e Altri accessori per il Kendo!
          <br />
        </p>
      ),
      btnProps: { btnText: 'Acquista Ora', href: '/shop' },
      imgSize: 'w-full',
      extraClasses: ' ',
      id: 'tenugui',
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
        <div className='blue container xl:py-36 hlg:py-32 lg:py-36 hmd:py-24 md:py-15 sm:py-24 xsm:py-20 py-8 mx-auto'>
          <div className='w-full float-center'>
            <motion.p
              className=' md:text-8xl sm:text-7xl text-6xl text-center text-pearl md:p-10 px-5 py-14'
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
          <h1 className='text-center md:text-5xl text-4xl text-blue'>
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
            tag={item.tag}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Content;
