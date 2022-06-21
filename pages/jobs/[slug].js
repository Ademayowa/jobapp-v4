import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';

export default function Job({
  frontmatter: {
    category,
    date,
    description,
    info,
    location,
    role,
    salary,
    text,
    title,
  },
  slug,
  content,
}) {
  return (
    <Layout title='Job'>
      <h2>{role}</h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('jobs'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('jobs', slug + '.md'));

  const { data: frontmatter, content } = matter(markdownWithMeta);
  // console.log(frontmatter);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
