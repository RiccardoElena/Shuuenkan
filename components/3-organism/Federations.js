import Image from 'next/image';
import CIKLogoExtended from '../../public/CIKlogo.png';
import CIKlogo from '../../public/CIKlogoSquared.png';
import FIKlogo from '../../public/FIKlogo.jpeg';
import EKFlogo from '../../public/EKFlogo.png';
import INFlogo from '../../public/INFlogo.jpeg';

import MenuItem from '../2-molecules/MenuItem';

const items = [
  {
    title: 'CIK',
    text: 'Confederazione Italiana Kendo',
    src: CIKlogo,
    url: 'https://confederazioneitalianakendo.it/',
  },
  {
    title: 'FIK',
    text: 'International Kendo Federation',
    src: FIKlogo,
    url: 'https://www.kendo-fik.org/',
  },
  {
    title: 'EKF',
    text: 'European Kendo Federation',
    src: EKFlogo,
    url: 'https://www.ekf-eu.com/',
  },
  {
    title: 'INF',
    text: 'International Naginata Federation',
    src: INFlogo,
    url: 'https://www.facebook.com/International-Naginata-Federation-276489462464338/',
  },
];

const Federation = () => {
  return (
    <div
      className='bg-white py-10 pb-24'
      //style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)' }}
    >
      <div className='container py-10 mx-auto'>
        <div className='w-full float-center mx-auto justify-items-center'>
          <div className='float-center w-fit mx-auto'>
            <Image
              src={CIKLogoExtended}
              alt='logo CIK'
              width={1000}
              height={200}
            />
          </div>
        </div>
        <div className='w-3/4 float-center mx-auto justify-items-center md:p-10 py-5'>
          <p className='md:text-3xl xsm:text-2xl text-xl leading-relaxed text-center text-blue'>
            Lo Shuuenkan Napoli Kendo è l&apos;unico dojo di Napoli e provincia
            membro della CIK (Confederazione Italiana Kendo), che si occupa di
            promuovere le discipline di Kendo, Iaido, Jodo e Naginata sul
            territorio italiano.
            <br /> <br />
            La CIK è l’unico membro sul territorio della Repubblica Italiana,
            riconosciuto dalla{' '}
            <a
              className='text-cyan-300 hover:text-blue-800'
              href='https://www.kendo-fik.org/'
              target='_blank'
              rel='noreferrer'
            >
              International Kendo Federation
            </a>{' '}
            (FIK – membro SportAccord), dalla{' '}
            <a
              className='text-cyan-300 hover:text-blue-800'
              href='https://www.ekf-eu.com/'
              target='_blank'
              rel='noreferrer'
            >
              European Kendo Federation
            </a>{' '}
            (EKF) e dalla{' '}
            <a
              className='text-cyan-300 hover:text-blue-800'
              href='https://www.facebook.com/International-Naginata-Federation-276489462464338/'
              target='_blank'
              rel='noreferrer'
            >
              International Naginata Federation
            </a>{' '}
            (INF) per la gestione della pratica e della diffusione delle
            discipline Kendo, Iaido, Jodo e Naginata.
          </p>
        </div>
      </div>
      <div className='w-full float-center'>
        <p className='font-bold text-3xl text-center text-blue pb-20'>
          Scopri le Federazioni ufficiali del Kendo nazionale, europeo e
          internazionale
        </p>
      </div>
      <div className='container flex flex-wrap mx-auto rounded-md pb-5'>
        {items.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            text={item.text}
            url={item.url}
            alt={`${item.title} logo`}
            src={item.src}
            tag='a'
          />
        ))}
      </div>
    </div>
  );
};

export default Federation;
