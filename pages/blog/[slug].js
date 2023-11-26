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
      <div className="mt-16 lg:mt-48">
        <div className="my-32 text-center">
          <h1 className="my-4 text-6xl text-shuuenkan-blue ">{title}</h1>
          <h2 className="text-3xl text-slate-600">{subtitle}</h2>
          <p className="mt-2 mb-8 text-slate-400">
            {author}, {date}, {readingTime(content).readingTime} min.
          </p>
          <Image
            src={`/posts/${src}`}
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
        </div>

        <article className="xs:mx-0 prose prose-lg m-auto prose-img:m-auto sm:prose-xl lg:prose-2xl">
          <Markdown>{content}</Markdown>
        </article>
        <div className="my-14 flex">
          <Button text="Torna indietro" href="/blog" className="text-2xl" />
          <div className="mx-auto flex w-1/6 justify-evenly">
            <FacebookShareButton
              url={`https://shuuenkan.com/blog/${slug}`}
              quote={`Dai un'occhiata a questo articolo del blog dello Shuuenkan Dojo.\n"${title}"\n${subtitle}\n`}
              hashtag={'#shuuenkan'}>
              <FacebookIcon size={48} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://shuuenkan.com/blog/${slug}`}
              title={`Dai un'occhiata a questo articolo del blog dello Shuuenkan Dojo.\n"${title}"\n${subtitle}\n`}
              hashtag={['#shuuenkan', '#kendo']}>
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
