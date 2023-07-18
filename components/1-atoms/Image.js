import NextImage from 'next/image';

const Image = ({ width, maxWidth, ...rest }) => {
  return <NextImage {...rest} />;
};

export default Image;
