import Link from 'next/link';
import React, { useState } from 'react';

const items = [
  { title: 'Chi siamo', url: '/about', id: 1 },
  { title: 'Il Kendo', url: '/kendo', id: 2 },
  { title: 'Il Dojo', url: '/dojo', id: 3 },
  { title: 'Progetti', url: '/projects', id: 4 },
  { title: 'Contattaci', url: '/contacts', id: 5 },
];

const Nav = ({ scroll }) => {
  const [navDisplayed, setNavDisplayed] = useState(false);

  const navDisplayHandler = () => {
    setNavDisplayed(!navDisplayed);
  };

  return (
    <>
      <button
        className='h-20 w-20 p-2 absolute right-0 rounded-2xl border-0 cursor-pointer justify-self-end text-right md:hidden mx-8'
        onClick={navDisplayHandler}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 mx-auto text-pearl'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fill={!scroll ? '#1d439a' : '#bdbbbb'}
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      <div>
        <ul
          className={`md:flex md:flex-row md:static  absolute ${
            navDisplayed ? 'static' : 'hidden'
          } top-28 left-0 flex-col items-center justify-end justify-between w-full h-fit ${
            !scroll ? 'bg-white' : 'blue'
          } md:border-0 border-t borderPearl`}
        >
          {items.map((item) => (
            <li
              className={`xl:mx-8 lg:text-xl hlg:text-xl mx-1 md:text-lg  md:hover:bg-inherit text-center w-full py-6 md:py-4 ${
                !scroll
                  ? 'text-blue hover:text-blue-700 hoverPearl'
                  : 'text-pearl hover:text-white hover:bg-blue-600'
              }`}
              key={item.id}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
