import Link from 'next/link';
import Image from "next/image";

const PostPreview = ({
  alt,
  src,
  imgWidth = 720,
  imgHeight = 720,
  date,
  slug,
  title,
  subtitle,
  author,
}) => {
  return (
    <div className="m-2 flex w-full flex-wrap rounded-md border border-slate-300 bg-white  shadow-sm">
      <div className="my-auto p-4">
        <p className="text-sm text-slate-400">
          {author}, {date}
        </p>

        <Link href={`/blog/${slug}`} legacyBehavior>
          <h2
            className=" mb-2
          text-3xl text-blue-600 hover:text-shuuenkan-blue hover:underline">
            {title}
          </h2>
        </Link>
        <p className="text-xl text-slate-700">{subtitle}</p>
      </div>
      {/*
        <div className={` m-auto hidden justify-center pt-2 lg:block`}>
          <Image
            alt={alt}
            src={`/posts/${src}`}
            width={
              imgHeight === imgWidth
                ? Number(imgWidth) / 6
                : Number(imgWidth) / 5
            }
            height={
              imgHeight === imgWidth
                ? Number(imgWidth) / 6
                : Number(imgHeight) / 5
            }
            priority
          />
        </div>
          */}
    </div>
  );
};

export default PostPreview;
