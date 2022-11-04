import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowSize } from '../../hooks';

const items = [
  { title: 'Chi siamo', url: '/about', id: 1 },
  { title: 'Il Kendo', url: '/kendo', id: 2 },
  { title: 'Il Dojo', url: '/dojo', id: 3 },
  { title: 'Progetti', url: '/projects', id: 4 },
  { title: 'Contattaci', url: '/contacts', id: 5 },
];

const Nav = ({ scroll }) => {
  const { width } = useWindowSize();
  const [navDisplayed, setNavDisplayed] = useState(true);

  const navDisplayHandler = () => {
    setNavDisplayed(!navDisplayed);
  };

  let desktopSize = true;

  if (width < 768) desktopSize = false;

  useEffect(() => setNavDisplayed(desktopSize), [desktopSize]);

  return (
    <>
      <button
        className='h-20 w-20 p-2 absolute right-0 rounded-2xl border-0 cursor-pointer justify-self-end text-right md:hidden mx-8'
        onClick={navDisplayHandler}
      >
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
          className={`md:flex md:flex-row md:static md:z-50 z-10 mr-2 absolute  top-28 left-0 flex-col items-center justify-end justify-between w-full h-fit ${
            !scroll ? 'bg-inherit' : 'bg-inherit'
          } `}
        >
          <AnimatePresence mode='sync'>
            {navDisplayed &&
              items.map((item) => (
                <motion.div
                  variants={{
                    exit: {
                      opacity: '1',
                      y: '-100vh',
                    },
                    transition: { duration: 0.1, delay: item.id * 10 },
                  }}
                  initial={{ opacity: '0', y: '-100vh' }}
                  animate={{
                    opacity: '1',
                    y: '0',
                    transition: {
                      duration: 0.8,
                      delay: 0.3 / item.id,
                      type: 'spring',
                      bounce: desktopSize ? 0.2 : 0.4,
                    },
                  }}
                  exit='exit'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`md:hover:bg-inherit ${
                    !scroll
                      ? 'text-shuuenkan-blue hover:text-blue-700 hover:bg-pearl bg-white'
                      : 'text-pearl hover:text-white hover:bg-blue-600 bg-shuuenkan-blue'
                  }`}
                  key={item.id}
                >
                  <li
                    className={`xl:mx-8 hmd:mx-4 md:mx-2 mx-auto text-2xl   text-center w-fit py-6 md:py-4 `}
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                </motion.div>
              ))}
          </AnimatePresence>
        </ul>
      </div>
    </>
  );
};

export default Nav;
