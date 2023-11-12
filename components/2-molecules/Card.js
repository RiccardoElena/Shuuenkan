import Image from "next/image";

import Button from '../1-atoms/Button';

const Card = ({
  alt,
  src,
  title,
  text,
  imgSize = 'w-1/2',
  btn = false,
  btnProps,
  extraClasses = 'md:flex-nowrap',
  tag = 'a',
  id,
}) => {
  return (
    <div
      id={id}
      className={`my-10 flex w-full flex-wrap rounded border-2 border-pearl bg-white text-shuuenkan-blue ${extraClasses}`}>
      <div className={`${imgSize} m-auto`}>
        <Image
          alt={alt}
          src={src}
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div
        className={`${
          imgSize == 'w-1/2' ? 'my-auto' : 'my-5'
        } mx-auto w-fit text-4xl `}>
        <h1 className="p-5 text-center text-5xl">{title}</h1>
        <p className=" m-5 text-center">{text}</p>
        {btn && (
          <div className="m-5">
            <Button text={btnProps.btnText} href={btnProps.href} tag={tag} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
