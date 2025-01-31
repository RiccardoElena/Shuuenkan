import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostItem from '../../components/2-molecules/PostItem';
import Main from '../../components/4-layouts/Main';
import parseDate from '../../components/0-utils/parseDate';

const Blog = ({ posts }) => {
  const postPreviews = posts
    .filter(
      (post) =>
        new Date(post.date.split('-').reverse().join('-')) <= new Date(),
    )
    .map((post) => {
      return <PostItem key={post.slug} {...post} />;
    });
  return (
    <Main secondTitle="Archivio Blog" className=" my-48 ">
      <div className="mx-auto mt-14 w-3/4">
        <h1 className="p-8 text-7xl text-shuuenkan-blue">Archivio Articoli</h1>
        <div className="flex flex-wrap justify-center">{postPreviews}</div>
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

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      ...frontmatter,
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
