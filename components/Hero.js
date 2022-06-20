export default function Hero() {
  return (
    <div className='pl-10 md:pl-12 bg-blueColor pt-10 h-72 lg:h-96'>
      <div className='relative lg:pt-5'>
        <h1 className='text-3xl lg:text-6xl text-white font-bold lg:w-6/12 !leading-tight'>
          The Easiest Way To Get Your New Job.
        </h1>

        <p className='text-xl mt-5 !lg:pb-20 text-white md:w-9/12 lg:w-5/12 font-extralight'>
          Searching and finding your dream job is now easier than ever. Just
          browse a job and apply with ease.
        </p>

        <div className='hidden lg:block'>
          <div className='absolute -top-10 right-0'>
            <img src={'/images/shape1.png'} alt='' />
          </div>

          <div className='absolute top-20 right-14'>
            <img src={'/images/shape2.png'} alt='' />
          </div>

          <div className='absolute top-40 right-24'>
            <img src={'/images/shape3.png'} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
