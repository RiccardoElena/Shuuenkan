import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Nav from '../2-molecules/Nav';

const Header = () => {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < 180;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <header
      className={`fixed z-50 right-0 top-0 py-2 w-full h-36 ${
        !scroll ? 'shadow-lg bg-white h-28' : 'blue  text-pearl'
      }`}
    >
      <div className='container flex items-center justify-between mx-auto'>
        <Link href='/'>
          <a className='px-32'>
            <Image
              src='/logo.png'
              alt='me'
              width={`${!scroll ? '100' : '130'}`}
              height={`${!scroll ? '100' : '130'}`}
            />
          </a>
        </Link>

        <div className='flex items-center justify-end'>
          <Nav scroll={scroll} />
        </div>
      </div>
    </header>
  );
};

export default Header;
