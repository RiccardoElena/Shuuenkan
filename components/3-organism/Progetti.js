import Link from 'next/link';
import { motion } from 'framer-motion';

import Card from '../2-molecules/Card';

import naginataImage from '../../public/images/senseiCarlini.jpeg';
import fundImage from '../../public/images/fundLogo.png';
import tenuguiImage from '../../public/images/tengui.jpeg';
import FlatHero from '../2-molecules/FlatHero';

const Content = () => {
  const items = [
    {
      key: 1,
      src: fundImage,
      alt: 'GoFundMe Logo',
      title: 'Fundrising',
      text: (
        <span className="text-2xl sm:text-3xl md:text-4xl">
          Partecipa al nostro progetto di fundrising con l&apos;obbiettivo di
          sostituire la pavimentazione del dojo in parquet, modificare le porte
          e gli infissi deteriorati, rinnovare gli spogliatoi,facilitare
          l&apos;aquisto di attrezzature per chi non possa permettersene delle
          proprie e acquistare dei bogu per i bambini
          <br />
        </span>
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
        <span className="text-2xl sm:text-3xl md:text-4xl">
          A partire da quest&apos;anno lo Shuuenkandojo propone un nuovo
          progetto di disciplina marziale, il <b>Naginata do</b>, sotto la
          sapiente guida di sensei Stefano Carlini (detto Nonno Naginata),{' '}
          <b>3 Dan di Naginata </b> e <b>Nazionale Italiano</b> per la sezione
          di Naginata della CIK.
          <br />
        </span>
      ),
      btnProps: {
        btnText: 'Scopri il Naginata',
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
        <span className="text-2xl sm:text-3xl md:text-4xl">
          Vendita Tenugui e Altri accessori per il Kendo!
          <br />
        </span>
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

  const fontSize = ' md:text-8xl sm:text-7xl text-6xl';

  return (
    <>
      <FlatHero fontSize={fontSize}>
        Lo <b className="text-white">Shuuenkandojo</b> presenta il{' '}
        <b className="text-white">primo e unico</b> progetto di kendo
        <b className="text-white"> sociale</b> in Italia!
      </FlatHero>
      <div className="container mx-auto flex flex-wrap rounded-md py-40">
        <div className="container mx-auto pb-20 ">
          <h1 className="text-center text-4xl text-shuuenkan-blue md:text-5xl">
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
