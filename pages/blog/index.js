import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostPreview from '../../components/2-molecules/PostPreview';
import Main from '../../components/4-layouts/Main';
import parseDate from '../../components/0-utils/parseDate';

const Blog = ({ posts }) => {
  const postPreviews = posts.map((post) => {
    return <PostPreview key={post.slug} {...post} />;
  });
  return (
    <Main secondTitle="Blog" className=" mt-48 ">
      <div className="m-auto flex w-3/4 flex-wrap justify-center">
        {postPreviews}
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