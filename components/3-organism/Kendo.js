import Image from 'next/image';
import kendoIcon from '../../public/kendoIcon.png';
import dojoIcon from '../../public/dojoIcon.png';
import projectsIcon from '../../public/projectsIcon.png';
import contactsIcon from '../../public/contactsIcon.png';
import KendoText from '../2-molecules/KendoText';
import Link from 'next/link';

const Content = () => {
  return (
    <div
      className='pearl py-20 '
      //style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)' }}
    >
      <div className='container py-10 mx-auto'>
        <div className='w-full float-center'>
          <p className='font-bold text-4xl text-center text-blue p-10'>
            Esplora la via della spada e ottieni maggiori informazioni sullo
            Shuuenkan e i suoi progetti
          </p>
        </div>
      </div>
      <div className='container flex flex-wrap mx-auto rounded-md pb-10'>
        <Link href='/kendo'>
          <div className=' md:w-1/4 w-1/2 p-10 text-blue'>
            <Image alt='Men in Kendo' src={kendoIcon} layout='responsive' />
            <h1 className='p-5 text-3xl text-center'>Il Kendo</h1>
            <p className='text-xl text-center'>
              Lo scopo della pratica del kendo
            </p>
          </div>
        </Link>
        <div className=' md:w-1/4 w-1/2 p-10 text-blue'>
          <Image alt='Men in Kendo' src={dojoIcon} layout='responsive' />
          <h1 className='p-5 text-3xl text-center'>Il Dojo</h1>
          <p className='text-xl text-center'>
            Shuuenkan, il luogo dove si impara la via
          </p>
        </div>
        <div className=' md:w-1/4 w-1/2 p-10 text-blue'>
          <Image alt='Men in Kendo' src={projectsIcon} layout='responsive' />
          <h1 className='p-5 text-3xl text-center'>Progetti</h1>
          <p className='text-xl text-center'>
            Scopri il Social Kendo e tutte le nostre novità
          </p>
        </div>
        <div className=' md:w-1/4 w-1/2 p-10 text-blue'>
          <Image alt='Men in Kendo' src={contactsIcon} layout='responsive' />
          <h1 className='p-5 text-3xl text-center'>Contatti</h1>
          <p className='text-xl text-center'>
            Contattaci per maggiori informazioni o vienici a trovare
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
