import Image from 'next/image';
import fundImage from '../../public/fundLogo.png';
import tenguiImage from '../../public/tengui.jpeg';
import hakamaGiImage from '../../public/hakamaGiImage.png';
import styles from './Attrezzatura.module.css';
import contactsIcon from '../../public/contactsIcon.png';
import KendoText from '../2-molecules/KendoText';
import Link from 'next/link';
import Button from '../1-atoms/Button';

const Content = () => {
  return (
    <div className=' py-36'>
      <div className='blue'>
        <div className='blue container py-36 mx-auto'>
          <div className='w-full float-center'>
            <p className='font-bold text-8xl text-center text-pearl p-10'>
              Lo <a className='text-white'>Shuuenkandojo</a> presenta il{' '}
              <a className='text-white'>primo</a> e{' '}
              <a className='text-white'>unico</a> progetto di kendo gratuito in
              Italia!
            </p>
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
        <div
          className={` w-full  m-10 border-2 borderPearl rounded text-blue flex `}
        >
          <div className='w-1/2 my-auto'>
            <Image alt='Men in Kendo' src={fundImage} layout='responsive' />
          </div>
          <div className=' p-10 bg-white w-fit '>
            <h1 className='p-5 text-5xl text-center'>Fundrising</h1>
            <p className=' text-4xl text-center'>
              <p className='pb-10'>
                Partecipa al nostro progetto di fundrising con l'obbiettivo di
                sostituire la pavimentazione del dojo in parquet, modificare le
                porte e gli infissi deteriorati, rinnovare gli
                spogliatoi,facilitare l'aquisto di attrezzature per chi non
                possa permettersene delle proprie e acquistare dei bogu per i
                bambini
                <br />
              </p>
              <Button
                text='Dona!'
                href='https://gofund.me/12c1d74f'
                targ='_blank'
              />
            </p>
          </div>
        </div>
        <div
          className={`  w-full m-10 border-2 borderPearl rounded text-blue flex flex-col`}
        >
          <div className='w-full my-auto'>
            <Image alt='Men in Kendo' src={tenguiImage} layout='responsive' />
          </div>
          <div className=' p-10 bg-white w-fit mx-auto'>
            <h1 className='p-5 text-5xl text-center'>Tengui</h1>
            <p className=' text-4xl text-center'>
              <p className='pb-10 '>
                Vendita e Produzione tengui!
                <br />
              </p>
              <Button text='Vai allo shop!' tar='_blank' href='/shop' />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
