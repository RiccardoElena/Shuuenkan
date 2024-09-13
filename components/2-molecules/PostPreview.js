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
  readingTime,
  totalPosts
}) => {
  return (
    <div
      className={`m-6 rounded-md border border-slate-300 bg-white  shadow-sm
    md:w-2/5 xl:w-1/${Math.floor(totalPosts/2) +1}`}>
     {/* {src && */}
      <div className={`m-auto ${imgHeight === imgWidth ? 'w-7/12 h-3/5' : ''}`}>
        <Image
          alt={alt}
          // src={`/posts/${src}`}
          src={`/posts/${src?src:"default_post.png"}`}
          width={Number(imgWidth)}
          height={Number(imgHeight)}
          priority
          style={{
            maxWidth: "100%",
            height: "auto",
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      {/* } */}
      <div className="mt-4 h-1/3 p-4">
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
        <p className="text-md text-slate-400">
          {readingTime} minuti di lettura
        </p>
      </div>
    </div>
  );
};

export default PostPreview;
