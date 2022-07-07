import Job from './Job';

export default function SearchResults({ results }) {
  // Hides the search component result when nothing is being typed in d form by users
  if (results.length === 0) return <></>;

  return (
    <div className='absolute top-20 right-0 md:right-10 z-10 border-2 border-blue-200 bg-white text-black w-full md:w-6/12 rounded-2xl mt-5'>
      <div className='p-10'>
        <h2 className='text-3xl mb-3'>{results.length} Jobs Found</h2>
        {results.map((result, index) => (
          <Job key={index} job={result} />
        ))}
      </div>
    </div>
  );
}
