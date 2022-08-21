import Image from 'next/image';
import boguImage from '../../public/bogu.jpeg';
import swordImage from '../../public/sword.jpeg';
import hakamaGiImage from '../../public/hakamaGiImage.png';
import styles from './Attrezzatura.module.css';
import contactsIcon from '../../public/contactsIcon.png';
import KendoText from '../2-molecules/KendoText';
import Link from 'next/link';

const Content = () => {
  return (
    <div className='blue py-20 '>
      <div className='container py-10 mx-auto'>
        <div className='w-full float-center'>
          <p className='font-bold text-7xl text-center text-pearl p-10'>
            Vestiario e Armi per la Pratica
          </p>
        </div>
      </div>
      <div className='container flex flex-wrap mx-auto rounded-md pb-10'>
        <div
          className={` md:w-full w-1/2 m-10 border-2 borderPearl rounded text-blue flex `}
        >
          <div className='w-1/2'>
            <Image alt='Men in Kendo' src={boguImage} layout='responsive' />
          </div>
          <div className=' p-10 bg-white w-fit py-20 '>
            <h1 className='p-5 text-5xl text-center'>Il Bogu</h1>
            <p className=' text-4xl text-center'>
              Le protezioni usate nel Kendo comprendono un elmo che comprende
              testa e gola (<b>Men</b>), un corpetto per l'addome (<b>Do</b>) e
              dei guantoni per i polsi (<b>Kote</b>). Si utilizzano inoltre un
              fazzoletto per assorbire il sudore (<b>Tenugui</b>), una
              protezione per i fianchi (<b>Tare</b>) ed un'iscrizione da
              applicarvici col nome del dojo d'appartenenza (<b>Zekken</b>)
            </p>
          </div>
        </div>
        <div
          className={` md:w-full w-1/2 m-10 border-2 borderPearl bg-white rounded text-blue flex `}
        >
          <div className=' p-10  w-fit '>
            <h1 className='p-5 text-5xl text-center'>Le Spade</h1>
            <p className=' text-3xl text-center'>
              Nella pratica del Kendo si utilizzano 3 tipi di spade: <br />
              Le <b>Shinai</b>: una spada composta da 4 stecche di bamboo (take)
              e parti in pelle (tsuka, naka-yui e saki-gawa), tenute insieme da
              un filo in tensione (tsuru) e completata da un’elsa (tsuba).{' '}
              <br /> I <b>Bokken</b> e i <b>Kodachi</b>: delle esatte
              rappresentazioni in legno delle spade tradizionali giapponesi. Il
              bokken è la spada lunga, mentre il kodachi è quella corta
            </p>
          </div>
          <div className='w-1/2 my-auto'>
            <Image alt='Men in Kendo' src={swordImage} layout='responsive' />
          </div>
        </div>
        <div
          className={` md:w-full w-1/2 m-10 border-2 borderPearl rounded text-blue flex `}
        >
          <div className='w-1/2 bg-white'>
            <Image alt='Men in Kendo' src={hakamaGiImage} layout='responsive' />
          </div>
          <div className=' p-10 bg-white w-fit py-20 '>
            <h1 className='p-5 text-5xl text-center'>Hakama e Kendogi</h1>
            <p className=' text-4xl text-center'>
              La divisa di pratica è costituita da una giacca (<b>Kendogi</b>) e
              da ampi pantaloni (<b>Hakama</b>), solitamente di colore blu ma,
              occasionalmente, alcuni praticanti, in base al grado, al sesso ed
              all’anzianità, possono utilizzarli bianchi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
