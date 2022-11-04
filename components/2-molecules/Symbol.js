import Image from 'next/image';
import Link from 'next/link';
import giardinoImage from '../../public/logo.png';
import { useWindowSize } from '../../hooks';

const Garden = () => {
  const { width } = useWindowSize();
  const image = giardinoImage;
  return (
    <div className='bg-shuuenkan-blue lg:py-15 hmd:py-10 md:py-7 py-7 w-full'>
      <div className='container mx-auto rounded-md pb-10'>
        <h1 className='md:text-7xl text-5xl text-white text-left m-10'>
          Il Simbolo
        </h1>
        <div
          className={` w-full rounded text-shuuenkan-blue flex flex-wrap md:flex-nowrap `}
        >
          <div className='sm:w-1/2 w-3/4 m-auto'>
            <Image alt='Shuuenkan logo' src={image} layout='responsive' />
          </div>
          <div className=' p-10 text-white w-fit text-center'>
            <h1 className='p-5 xsm:text-4xl text-3xl text-center'>I Kenshi</h1>
            <p className=' xsm:text-3xl text-2xl text-centerpb-10'>
              La figura rappresenta lo scontro interiore ed esteriore del Kenshi
              (praticante di Kendo) che, interiormente lascia ardere vivida la
              fiamma della passione ma esternamente non lascia trasparire nulla,
              se non un&apos;aura di imperturbabile tranquillità.
            </p>
            <h1 className='p-5 xsm:text-4xl text-3xl text-center'>Il Kanji</h1>
            <p className=' xsm:text-3xl text-2xl text-centerpb-10'>
              Il Kanji Shuuenkan 修焔館 vuol dire &quot;Luogo in cui si Domina
              la Fiamma&quot;, ideato per noi da Sensei Tani Katsuhiko, 8 Dan
              Hanshi. Questo nome fa riferimento al parallelismo tra i due
              vulcani Fuji e Vesuvio, entrambi importantissimi nella vita e
              nella cultura di Napoli e del sol levante, che rimangono
              imperturbabili all&apos;esterno e ardenti nelle proprie viscere,
              dando esempio ai Kenshi che si devono porre analogamente nel
              confrontarsi nell&apos;arte della spada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;
