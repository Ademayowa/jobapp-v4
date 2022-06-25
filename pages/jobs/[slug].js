import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import Link from 'next/link';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { BsArrowLeft } from 'react-icons/bs';
import { MdMonetizationOn } from 'react-icons/md';
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
  },
  slug,
  content,
}) {
  return (
    <Layout title={role}>
      <div className='py-5 shadow-lg bg-white rounded-lg m-5 md:m-10'>
        <div className='px-10 md:mx-10 md:px-12 py-4'>
          <div className='my-4'>
            <Link href='/jobs'>
              <a>
                <BsArrowLeft className='w-5 h-5 my-5 cursor-pointer text-[#EF4444]' />
              </a>
            </Link>
            <h2 className='text-blueColor text-lg md:text-2xl font-bold mt-2'>
              {role}
            </h2>

            <div className='flex items-center mt-2 space-x-2'>
              <LocationMarkerIcon className='w-5 h-5 text-blue-500 -ml-1' />
              <p className='text-grayColor text-base md:text-lg'>{location}</p>
            </div>

            <div className='flex items-center mt-2 space-x-2'>
              <MdMonetizationOn className='w-5 h-5 text-blue-500 -ml-1' />
              <p className='text-grayColor text-base md:text-lg'>{salary}</p>
            </div>
          </div>
        </div>
        <hr className='border-b border-red-400' />

        <div className='job-post px-10 md:mx-10 md:px-12 py-4 text-grayColor'>
          <div className='mt-5 text-sm md:text-base !leading-9'>
            <p className='max-w-4xl'>{text}</p>
            <h4 className='my-4 font-bold'>{info}</h4>

            <div className='flex items-center space-x-4'>
              {/* html:marked - display markdown file as html in browser */}
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </div>
        </div>
      </div>
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
