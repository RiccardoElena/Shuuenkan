import MenuItem from '../2-molecules/MenuItem';

import kendoIcon from '../../public/images/kendoIcon.png';
import dojoIcon from '../../public/images/dojoIcon.png';
import projectsIcon from '../../public/images/projectsIcon.png';
import contactsIcon from '../../public/images/contactsIcon.png';

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
    <div className="bg-pearl py-5 md:py-20 ">
      <div className="container mx-auto py-0 md:py-10">
        <div className="float-center w-full">
          <p className="p-5 pb-8 pt-4 text-center text-3xl font-bold text-shuuenkan-blue xsm:p-10 md:text-4xl">
            Esplora la via della spada e ottieni maggiori informazioni sullo
            Shuuenkan e i suoi progetti
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap rounded-md ">
        {items.map((item) => (
          <MenuItem
            key={item.key}
            alt={item.alt}
            title={item.title}
            text={item.text}
            url={item.url}
            src={item.src}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default Content;
