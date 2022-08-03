import Image from 'next/image';
import Link from 'next/link';

const MenuItem = ({ url, src, alt, title, text }) => {
  return (
    <Link href={url}>
      <div className='w-1/2 h-1/2 '>
        <div className='rounded-full w-1/2'>
          <Image
            src={src}
            alt={alt}
            layout='responsive'
            width={100}
            height={100}
          />
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
