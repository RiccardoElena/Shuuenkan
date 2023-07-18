import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({ text, reverse, href, tag }) => {
  const Tag = tag || Link;
  const classes = reverse
    ? 'bg-inherit text-white border-2 border-white'
    : 'text-shuuenkan-blue hover:text-blue-600 bg-inherit border-2 border-shuuenkan-blue hover:border-blue-600';
  const target = tag == 'a' ? '_blank' : '_self';

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${classes} mx-auto my-2 w-fit rounded-3xl px-6 py-2`}>
      <Tag className="text max-w-xs text-right" href={href} target={target}>
        {text}
      </Tag>
    </motion.div>
  );
};

export default Button;
