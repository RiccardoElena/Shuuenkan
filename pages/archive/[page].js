import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import parseDate from '../../components/0-utils/parseDate';

const Archive = ({ posts }) => {
  const page = '1';
  const per_page = '5';

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = posts.slice(start, end);

  return (
    <div className="flex flex-col items-center gap-2">
      {entries.map((entry) => (
        <p key={entry.slug}>{entry.title}</p>
      ))}
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  console.log(Math.floor(files.length / 5));
  const paths = [...Math.floor(files.length / 5)];
  return { paths, fallback: false };
}

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

export default Archive;
