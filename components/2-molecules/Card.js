import Image from 'next/image';
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
      className={`w-full bg-white my-10 border-2 border-pearl rounded text-shuuenkan-blue flex flex-wrap ${extraClasses}`}
    >
      <div className={`${imgSize}  m-auto`}>
        <Image alt={alt} src={src} layout='responsive' />
      </div>
      <div
        className={`${
          imgSize == 'w-1/2' ? 'my-auto' : 'my-5'
        } mx-auto text-4xl w-fit `}
      >
        <h1 className='p-5 text-5xl text-center'>{title}</h1>
        <p className=' text-center m-5'>{text}</p>
        {btn && (
          <div className='m-5'>
            <Button text={btnProps.btnText} href={btnProps.href} tag={tag} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
