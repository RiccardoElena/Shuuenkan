import Image from "next/legacy/image";

import MenuItem from '../2-molecules/MenuItem';

import CIKLogoExtended from '../../public/images/CIKlogo.png';
import CIKlogo from '../../public/images/CIKlogoSquared.png';
import FIKlogo from '../../public/images/FIKlogo.jpeg';
import EKFlogo from '../../public/images/EKFlogo.png';
import INFlogo from '../../public/images/INFlogo.jpeg';
import ENFlogo from '../../public/images/ENFlogo.png';

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
  {
    title: 'ENF',
    text: 'European Naginata Federation',
    src: ENFlogo,
    url: 'https://naginata-federation.eu/',
  },
];

const Federation = () => {
  return (
    <div className="bg-white py-10 pb-24">
      <div className="container mx-auto py-10">
        <div className="float-center mx-auto w-full justify-items-center">
          <div className="float-center mx-auto w-fit">
            <Image
              src={CIKLogoExtended}
              alt="logo CIK"
              width={1000}
              height={200}
            />
          </div>
        </div>
        <div className="float-center mx-auto w-3/4 justify-items-center py-5 md:p-10">
          <p className="text-center text-xl leading-relaxed text-shuuenkan-blue xsm:text-2xl md:text-3xl">
            Lo Shuuenkan Napoli Kendo è l&apos;unico dojo di Napoli e provincia
            membro della CIK (Confederazione Italiana Kendo), che si occupa di
            promuovere le discipline di Kendo, Iaido, Jodo e Naginata sul
            territorio italiano.
            <br /> <br />
            La CIK è l’unico membro sul territorio della Repubblica Italiana,
            riconosciuto dalla{' '}
            <a
              className="text-cyan-300 hover:text-blue-800"
              href="https://www.kendo-fik.org/"
              target="_blank"
              rel="noreferrer">
              International Kendo Federation
            </a>{' '}
            (FIK – membro SportAccord), dalla{' '}
            <a
              className="text-cyan-300 hover:text-blue-800"
              href="https://www.ekf-eu.com/"
              target="_blank"
              rel="noreferrer">
              European Kendo Federation
            </a>{' '}
            (EKF) e dalla{' '}
            <a
              className="text-cyan-300 hover:text-blue-800"
              href="https://www.facebook.com/International-Naginata-Federation-276489462464338/"
              target="_blank"
              rel="noreferrer">
              International Naginata Federation
            </a>{' '}
            (INF) per la gestione della pratica e della diffusione delle
            discipline Kendo, Iaido, Jodo e Naginata.
          </p>
        </div>
      </div>
      <div className="float-center w-full">
        <p className="pb-20 text-center text-3xl font-bold text-shuuenkan-blue">
          Scopri le Federazioni ufficiali del Kendo nazionale, europeo e
          internazionale
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap rounded-md pb-5">
        {items.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            text={item.text}
            url={item.url}
            alt={`${item.title} logo`}
            src={item.src}
            tag="a"
          />
        ))}
      </div>
    </div>
  );
};

export default Federation;
