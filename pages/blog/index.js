import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';

import PostPreview from '../../components/2-molecules/PostPreview';
import Main from '../../components/4-layouts/Main';
import parseDate from '../../components/0-utils/parseDate';
import readingTime from '../../components/0-utils/readingTime';
import Button from '../../components/1-atoms/Button';
import FlatHero from '../../components/2-molecules/FlatHero';

const Blog = ({ posts }) => {
  const postPreviews = posts.slice(0, 6).map((post) => {
    return <PostPreview key={post.slug} {...post} />;
  });

  const padding = 'py-56 sm:py-60 md:py-48 hmd:py-36 lg:py-40 xl:py-64 ';
  const fontSize = 'hmd:text-8xl sm:text-8xl text-6xl';
  return (
    <Main secondTitle="Blog" className="mb-20">
      <FlatHero padding={padding} fontSize={fontSize}>
        Scopri <b className="text-white">interviste</b>,{' '}
        <b className="text-white">approfondimenti</b> e{' '}
        <b className="text-white">curiosità</b> sul mondo del kendo e del
        giappone a firma <b className="text-white">Shuuenkan!</b>
      </FlatHero>
      <div className="mx-auto mt-14 w-3/4">
        <h1 className="p-16 text-7xl text-shuuenkan-blue">Ultimi Articoli</h1>
        <div className=" flex flex-wrap justify-center">{postPreviews}</div>
      </div>
      <div className="my-10">
        <Button
          text="Tutti gli articoli"
          href="/blog/archive"
          className="text-4xl"
          reverse
        />
      </div>
    </Main>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
      slug,
      ...frontmatter,
      readingTime: readingTime(content).readingTime,
    };
  });

  return {
    props: {
      posts: posts.sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date);
      }),
    },
  };
}

export default Blog;
