import kendoIcon from '../../public/kendoIcon.png';
import dojoIcon from '../../public/dojoIcon.png';
import projectsIcon from '../../public/projectsIcon.png';
import contactsIcon from '../../public/contactsIcon.png';
import MenuItem from '../2-molecules/MenuItem';

const items = [
  {
    key: 1,
    title: 'Il Kendo',
    text: 'Lo scopo della pratica del kendo',
    alt: 'Kendo Icon',
    src: kendoIcon,
    url: '/kendo',
  },
  {
    key: 2,
    title: 'Il Dojo',
    text: 'Shuuenkan, il luogo dove si impara la via',
    alt: 'Dojo Icon',
    src: dojoIcon,
    url: '/dojo',
  },
  {
    key: 3,
    title: 'Progetti',
    text: 'Scopri il Social Kendo e tutte le nostre novità',
    alt: 'Projects Icon',
    src: projectsIcon,
    url: '/projects',
  },
  {
    key: 4,
    title: 'Contatti',
    text: 'Contattaci per maggiori informazioni o vienici a trovare',
    alt: 'Contacts Icon',
    src: contactsIcon,
    url: '/contacts',
  },
];

const Content = () => {
  return (
    <div
      className='bg-pearl md:py-20 py-5 '
    >
      <div className='container md:py-10 py-0 mx-auto'>
        <div className='w-full float-center'>
          <p className='font-bold md:text-4xl text-3xl text-center text-shuuenkan-blue xsm:p-10 p-5 pb-8 pt-4'>
            Esplora la via della spada e ottieni maggiori informazioni sullo
            Shuuenkan e i suoi progetti
          </p>
        </div>
      </div>
      <div className='container flex flex-wrap mx-auto rounded-md '>
        {items.map((item) => (
          <MenuItem
            key={item.key}
            alt={item.alt}
            title={item.title}
            text={item.text}
            url={item.url}
            src={item.src}
          ></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default Content;
