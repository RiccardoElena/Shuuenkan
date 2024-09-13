import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import Image from 'next/image';

import Main from '../../components/4-layouts/Main';
import readingTime from '../../components/0-utils/readingTime';
import Button from '../../components/1-atoms/Button';

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
} from 'next-share';

const Post = ({
  frontmatter: { title, subtitle, date, src, alt, imgHeight, imgWidth, author },
  slug,
  content,
}) => {
  return (
    <Main>
      <div className="mx-10 mt-16 sm:mx-auto lg:mt-48">
        <div className="mb-16 mt-32 text-center sm:my-32 sm:mt-0">
          <h1 className="my-4 text-6xl text-shuuenkan-blue ">{title}</h1>
          <h2 className="text-3xl text-slate-600">{subtitle}</h2>
          <p className="mb-8 mt-2 text-xl text-slate-400">
            A cura di {author}, {date}, {readingTime(content).readingTime} min.
          </p>
          {src && (
            <Image
              src={`/posts/${src ? src : 'default_cover.png'}`}
              alt={alt}
              width={500 || imgWidth}
              height={500 || imgHeight}
              style={{
                margin: 'auto',
                maxWidth: '100%',
                height: 'auto',
                maxWidth: '100%',
                height: 'auto',
              }}></Image>
          )}
        </div>

        <article className="prose prose-lg m-auto sm:prose-xl lg:prose-2xl prose-img:m-auto">
          <Markdown>{content}</Markdown>
        </article>

        <div className="my-14 flex flex-col flex-wrap justify-center sm:flex-row">
          <Button text="Torna indietro" href="/blog" className="text-2xl" />
          <div className="mx-auto my-10 flex w-1/2 justify-evenly sm:my-0 sm:w-1/3 md:w-1/4  xl:w-1/6">
            <FacebookShareButton
              url={`https://shuuenkan.com/blog/${slug}`}
              quote={`Dai un'occhiata a questo articolo del blog dello Shuuenkan Dojo.\n"${title}"\n${subtitle}\n`}
              hashtag={'#shuuenkan#kendo#blog'}>
              <FacebookIcon size={48} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://shuuenkan.com/blog/${slug}`}
              title={`Dai un'occhiata a questo articolo del blog dello Shuuenkan Dojo.\n"${title}"\n${subtitle}\n`}
              hashtag={'#shuuenkan#kendo#blog'}>
              <TwitterIcon size={48} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url={`https://shuuenkan.com/blog/${slug}`}
              title={`Dai un'occhiata a questo articolo del blog dello Shuuenkan Dojo.\n"${title}"\n${subtitle}\n`}
              separator={':: '}>
              <WhatsappIcon size={48} round />
            </WhatsappShareButton>
            <TelegramShareButton
              url={`https://shuuenkan.com/blog/${slug}`}
              title={`Dai un'occhiata a questo articolo del blog dello Shuuenkan Dojo.\n"${title}"\n${subtitle}\n`}>
              <TelegramIcon size={48} round />
            </TelegramShareButton>
          </div>
        </div>
      </div>
    </Main>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8',
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default Post;
