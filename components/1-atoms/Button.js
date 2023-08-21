import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({ text, reverse, href, tag, className = '' }) => {
  const classes = `${className} ${
    reverse
      ? 'bg-inherit text-white border-2 border-white'
      : 'text-shuuenkan-blue hover:text-blue-600 bg-inherit border-2 border-shuuenkan-blue hover:border-blue-600'
  }`;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mx-auto my-2 w-fit justify-center">
      <Link href={tag !== 'a' ? href : ''}>
        <a
          href={tag === 'a' ? href : ''}
          target={tag === 'a' ? '_blank' : '_self'}
          className={`${classes}   rounded-3xl px-6 py-2`}>
          {text}
        </a>
      </Link>
    </motion.div>
  );
};

export default Button;
