import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MenuItem = ({ url, src, alt, title, text, tag, size }) => {
  const TagComponent = tag || Link;

  return (
    <TagComponent
      href={url}
      target={tag == 'a' ? '_blank' : '_self'}
      rel={tag == 'a' ? 'noopener noreferrer' : ''}
      className={tag == 'a' ? `md:w-1/5 w-1/2 mx-auto mb-10` : ''}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={` ${
          tag == 'a' ? 'w-1/2' : 'md:w-1/4 w-1/2 md:px-10 px-5'
        }  text-shuuenkan-blue hover:text-blue-600 m-auto mt-0 cursor-pointer`}
      >
        <Image alt={alt} src={src} layout='responsive' />
        <h1 className='md:p-5 p-2 xl:text-4xl md:text-3xl text-xl text-center'>
          {title}
        </h1>
        <p className='xl:text-2xl text-xl text-center'>{text}</p>
      </motion.div>
    </TagComponent>
  );
};

export default MenuItem;
