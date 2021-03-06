import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { sortByDate } from '@/utils/index';
import Hero from '@/components/Hero';
import Job from '@/components/Job';
import Layout from '@/components/Layout';
import Search from '@/components/Search';
import SectionTitle from '@/components/SectionTitle';

export default function JobsPage({ jobs }) {
  // console.log(jobs);
  return (
    <Layout title='Find Gigs'>
      {/* <Hero />
      <Search /> */}
      <SectionTitle title='All Jobs' />

      <div className='grid grid-cols-8 gap-x-7 px-10 md:px-12 md:mx-10'>
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('jobs'));

  const jobs = files.map((filename) => {
    // remove the .md extension from jobs
    const slug = filename.replace('.md', '');

    // gets all the contents of d md file
    const markdownWithMeta = fs.readFileSync(
      path.join('jobs', filename),
      'utf-8'
    );
    // {data:frontmatter} => data here being renamed to frontmatter
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      jobs: jobs.sort(sortByDate),
    },
  };
}
