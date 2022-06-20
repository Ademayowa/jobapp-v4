import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/outline';

export default function Search() {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-white -mt-10 shadow-lg rounded-lg mx-12 px-5 py-10 md:p-5'>
      <div className='flex items-center space-x-2'>
        <SearchIcon className='hidden md:block h-5 w-5 text-sky-500' />
        <input
          type='text'
          placeholder='Search jobs'
          className='mb-4 md:mb-0 bg-transparent outline-none border border-sky-500 md:border-none leading-10 w-full rounded-md pl-5 md:pl-0'
        />
      </div>

      <div className='flex items-center space-x-2 md:border-l-4 md:border-blue-200'>
        <LocationMarkerIcon className='hidden md:block h-5 w-5 text-sky-500 ml-4' />
        <input
          type='text'
          placeholder='city or state'
          className='mb-4 md:mb-0 bg-transparent outline-none border border-sky-500 md:border-none leading-10 w-full rounded-md pl-5 md:pl-0'
        />
      </div>

      <div className='flex flex-auto md:flex-none items-center mx-1 md:mx-0'>
        <button className='flex flex-auto justify-center rounded bg-red-500 px-5 py-2.5 text-white font-bold'>
          Find jobs
        </button>
      </div>
    </div>
  );
}
