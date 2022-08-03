import MenuItem from '../2-molecules/MenuItem';

const menu = [
  {
    title: 'Il Kendo',
    url: '/kendo',
    id: 1,
    src: '/kendo.jpeg',
    alt: 'kendo',
    text: 'Lo scopo della pratica del Kendo',
  },
  {
    title: 'Il Dojo',
    url: '/dojo',
    id: 2,
    src: '/kendo.jpeg',
    alt: 'kendo',
    text: 'Lo scopo della pratica del Kendo',
  },
  {
    title: 'Progetti',
    url: '/projects',
    id: 3,
    src: '/kendo.jpeg',
    alt: 'kendo',
    text: 'Lo scopo della pratica del Kendo',
  },
  {
    title: 'Contattaci',
    url: '/social',
    id: 4,
    src: '/kendo.jpeg',
    alt: 'kendo',
    text: 'Lo scopo della pratica del Kendo',
  },
];

const ContentMenu = () => {
  return (
    <div className='container flex '>
      <ul>
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            url={item.url}
            src={item.src}
            text={item.text}
            alt={item.alt}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContentMenu;
