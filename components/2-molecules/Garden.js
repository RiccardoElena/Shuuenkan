import Image from 'next/image';
import Link from 'next/link';
import giardinoImage from '../../public/images/giardino.jpeg';
import giardinoOriImage from '../../public/images/giardinoOri.jpeg';
import { useWindowSize } from '../../hooks';

const Garden = () => {
  const { width } = useWindowSize();
  const image = width > 768 ? giardinoImage : giardinoOriImage;
  return (
    <div className='bg-shuuenkan-blue lg:py-20 hmd:py-15 md:py-10 py-7 w-full'>
      <div className='container flex mx-auto rounded-md pb-10'>
        <div
          className={` w-full rounded text-shuuenkan-blue flex flex-wrap md:flex-nowrap `}
        >
          <div className='md:w-1/2 w-3/4 m-auto'>
            <Image alt='Men in Kendo' src={image} layout='responsive' />
          </div>
          <div className=' md:p-10 pt-5 text-white w-fit md:my-auto '>
            <h1 className='p-5 lg:text-7xl  hmd:text-6xl md:text-4xl text-5xl text-center font-bold'>
              Il Giardino Liberato
            </h1>
            <p className=' lg:text-3xl hmd:text-2xl md:text-xl text-2xl mx-auto text-center'>
              Lo Shuuenkan dojo pratica presso il{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/giardinoliberato.dimaterdei'
                className='text-pearl font-bold hover:text-white hover:underline'
              >
                Giardino Liberato di Materdei
              </a>
              , uno stupendo convento del XVIII secolo dichiarato &quot;Bene
              Comune&quot; dall&apos;amministrazione del Comune di Napoli
              diventando sede di un gruppo di associazioni di quartiere che
              gestisce la struttura e le attività interne, tutte a titolo
              gratuito rendendo possibile e sociale in questo modo anche la
              pratica del Kendo, facendolo diventare{' '}
              <Link href='/projects' passHref>
                <a className='text-pearl font-bold hover:text-white hover:underline'>
                  il primo progetto italiano completamente gratuito!
                </a>
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;
