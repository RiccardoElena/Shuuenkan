import NextImage from "next/legacy/image";

const Image = ({ width, maxWidth, ...rest }) => {
  return <NextImage {...rest} />;
};

export default Image;
