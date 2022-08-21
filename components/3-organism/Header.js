import { useEffect, useState } from 'react';
import { useWindowSize } from '../../hooks';

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
  const { width } = useWindowSize();

  return (
    <header
      className={`fixed z-50 right-0 top-0 py-2 w-full  ${
        !scroll ? 'shadow-lg bg-white h-28' : 'blue text-pearl lg:h-36 h-28'
      }`}
    >
      <div className='container flex items-center justify-between mx-auto'>
        <Link href='/'>
          <a className='xl:px-32 lg:px-24 md:px-10 px-16'>
            <Image
              src='/logo.png'
              alt='me'
              width={`${!scroll || width < 1024 ? '100' : '130'}`}
              height={`${!scroll || width < 1024 ? '100' : '130'}`}
            />
          </a>
        </Link>

        <Nav scroll={scroll} />
      </div>
    </header>
  );
};

export default Header;
