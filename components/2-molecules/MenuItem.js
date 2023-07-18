import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MenuItem = ({ url, src, alt, title, text, tag }) => {
  const TagComponent = tag || Link;

  return (
    <TagComponent
      href={url}
      target={tag == 'a' ? '_blank' : '_self'}
      rel={tag == 'a' ? 'noopener noreferrer' : ''}
      className={tag == 'a' ? `mx-auto mb-10 w-1/2 md:w-1/5` : ''}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={` ${
          tag == 'a' ? 'w-1/2' : 'w-1/2 px-5 md:w-1/4 md:px-10'
        }  m-auto mt-0 cursor-pointer text-shuuenkan-blue hover:text-blue-600`}>
        <Image alt={alt} src={src} layout="responsive" />
        <h1 className="p-2 text-center text-xl md:p-5 md:text-3xl xl:text-4xl">
          {title}
        </h1>
        <p className="text-center text-xl xl:text-2xl">{text}</p>
      </motion.div>
    </TagComponent>
  );
};

export default MenuItem;
