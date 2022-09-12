import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({ text, reverse, href, tag }) => {
  const Tag = tag || Link;
  const classes = reverse
    ? 'bg-inherit text-white border-2 border-white'
    : 'text-blue hover:text-blue-600 bg-inherit border-2 borderBlue hover:border-blue-600';
  const target = tag == 'a' ? '_blank' : '_self';
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${classes} px-6 py-2 w-fit mx-auto rounded-3xl`}
    >
      <Tag className={`text text-right  max-w-xs `} href={href} target={target}>
        {text}
      </Tag>
    </motion.div>
  );
};

export default Button;
