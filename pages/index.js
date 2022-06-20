import Hero from '@/components/Hero';
import Jobs from '@/components/Jobs';
import Layout from '@/components/Layout';
import Search from '@/components/Search';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  return (
    <Layout title='Find Gigs'>
      <div className='bg-[#F9FBFD]'>
        <Hero />
        <Search />
        <SectionTitle title='Latest Jobs' />
        <Jobs />
      </div>
    </Layout>
  );
}
