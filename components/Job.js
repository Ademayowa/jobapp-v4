import { LocationMarkerIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function Job({ job }) {
  const router = useRouter();

  return (
    <div
      // onClick={() => router.push(`/jobs/${job.attributes.slug}`)}
      className='col-span-10 lg:col-span-4 mx-auto rounded-lg shadow-md my-3 bg-white p-7 cursor-pointer'
    >
      <div className='flex items-center text-blueColor font-bold'>
        <h2 className='flex flex-1 text-blueColor text-lg md:text-2xl font-bold'>
          {job.frontmatter.role}
        </h2>
        <p>{job.frontmatter.salary}</p>
      </div>

      <div className='flex items-center space-x-1 mt-2.5'>
        <LocationMarkerIcon className='h-5 w-5 text-sky-500 -ml-1' />
        <p className='text-grayColor text-base md:text-lg'>
          {job.frontmatter.location}
        </p>
      </div>

      <div className='text-grayColor mt-2.5'>
        <p>Date posted: {job.frontmatter.date}</p>
      </div>

      <p className='text-grayColor text-base mt-2.5 !w-full md:w-3/4 leading-8'>
        {job.frontmatter.description}
      </p>

      <div className='flex mt-2.5'>
        <button className='rounded bg-red-500 px-5 py-2 text-white font-light'>
          View job
        </button>
      </div>
    </div>
  );
}
