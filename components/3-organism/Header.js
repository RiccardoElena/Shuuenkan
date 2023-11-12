import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import Nav from '../2-molecules/Nav';

import { useWindowSize } from '../../hooks';

import Link from 'next/link';
import Image from 'next/image';

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
      className={`fixed right-0 top-0 z-50 w-full py-2  ${
        !scroll
          ? 'h-28 bg-white shadow-lg'
          : 'h-28 bg-shuuenkan-blue text-pearl lg:h-36'
      }`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref legacyBehavior>
          <motion.a
            className="px-16 md:px-10 lg:px-24 xl:px-32"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Image
              src="/images/logo.png"
              priority
              alt="shuuenkan logo"
              width={`${!scroll || width < 1024 ? '100' : '130'}`}
              height={`${!scroll || width < 1024 ? '100' : '130'}`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </motion.a>
        </Link>

        <Nav scroll={scroll} />
      </div>
    </header>
  );
};

export default Header;
