import Image from 'next/image';
import CIKlogo from '../../public/CIKlogo.jpeg';
import CIKlogoSquared from '../../public/CIKlogoSquared.png';
import FIKlogo from '../../public/FIKlogo.jpeg';
import EKFlogo from '../../public/EKFlogo.png';
import INFlogo from '../../public/INFlogo.jpeg';
import KendoText from '../2-molecules/KendoText';
import Link from 'next/link';

const Federation = () => {
  return (
    <div
      className='bg-white py-10 pb-48'
      //style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)' }}
    >
      <div className='container py-10 mx-auto'>
        <div className='w-full float-center mx-auto justify-items-center'>
          <div className='float-center w-fit mx-auto'>
            <Image src={CIKlogo} alt='logo CIK' width={1000} height={200} />
          </div>
        </div>
        <div className='w-3/4 float-center mx-auto justify-items-center p-10 '>
          <p className='text-3xl leading-relaxed text-center text-blue'>
            Lo Shuuenkan Napoli Kendo è l'unico dojo di Napoli e provincia
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
      <div className='container flex flex-wrap mx-auto rounded-md pb-10'>
        <a
          href='https://confederazioneitalianakendo.it/'
          target='_blank'
          rel='noreferrer'
          className='md:w-1/4 w-1/2'
        >
          <div className=' w-1/2 m-auto hover:text-blue-600'>
            <Image
              alt='Men in Kendo'
              src={CIKlogoSquared}
              layout='responsive'
            />

            <h1 className='p-5 text-2xl text-center'>CIK</h1>
            <p className='text-xl text-center'>Confederazione italiana Kendo</p>
          </div>
        </a>
        <a
          href='https://www.kendo-fik.org/'
          className='md:w-1/4 w-1/2'
          target='_blank'
          rel='noreferrer'
        >
          <div className=' w-1/2 m-auto hover:text-blue-600'>
            <Image alt='Men in Kendo' src={FIKlogo} layout='responsive' />

            <h1 className='p-5 text-3xl text-center'>FIK</h1>
            <p className='text-xl text-center'>
              International Kendo Federation
            </p>
          </div>
        </a>
        <a
          href='https://www.ekf-eu.com/'
          className='md:w-1/4 w-1/2'
          target='_blank'
          rel='noreferrer'
        >
          <div className=' w-1/2 m-auto hover:text-blue-600'>
            <Image alt='Men in Kendo' src={EKFlogo} layout='responsive' />
            <h1 className='p-5 text-3xl text-center'>EKF</h1>
            <p className='text-xl text-center'>European Kendo Federation</p>
          </div>
        </a>
        <a
          href='https://www.facebook.com/International-Naginata-Federation-276489462464338/'
          className='md:w-1/4 w-1/2'
          target='_blank'
          rel='noreferrer'
        >
          <div className=' w-1/2 m-auto hover:text-blue-600'>
            <Image
              alt='Men in Kendo'
              src={INFlogo}
              layout='responsive'
              className='rounded-full'
            />
            <h1 className='p-5 text-3xl text-center'>INF</h1>
            <p className='text-xl text-center'>
              International Naginata Federation
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Federation;
