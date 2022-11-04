import NextImage from 'next/image';

const Image = ({ width, maxWidth, ...rest }) => {
  let widths = {};
  // widths['width'] = width ? width : '100%';
  //widths['maxWidth'] = maxWidth ? maxWidth : '100%';

  return (
    <NextImage {...rest} />
  );
};

export default Image;
