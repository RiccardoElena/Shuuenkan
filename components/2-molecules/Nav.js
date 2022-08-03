import Link from 'next/link';

const items = [
  { title: 'Chi siamo', url: '/about', id: 1 },
  { title: 'Il Kendo', url: '/kendo', id: 2 },
  { title: 'Il Dojo', url: '/dojo', id: 3 },
  { title: 'Progetti', url: '/projects', id: 4 },
  { title: 'Contattaci', url: '/contacts', id: 5 },
];

const Nav = ({ scroll }) => {
  return (
    <ul className='flex justify-between'>
      {items.map((item) => (
        <li
          className={`mr-16 text-lg ${
            !scroll
              ? 'text-blue hover:text-blue-700'
              : 'text-pearl hover:text-white '
          }`}
          key={item.id}
        >
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
