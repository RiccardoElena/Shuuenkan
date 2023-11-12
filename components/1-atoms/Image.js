import NextImage from "next/image";

const Image = ({ width, maxWidth, ...rest }) => {
  return (
    <NextImage
      {...rest}
      style={{
        maxWidth: "100%",
        height: "auto",
        maxWidth: "100%",
        height: "auto"
      }} />
  );
};

export default Image;
