import Header from '../components/header';
import MainSection from '../components/mainsection';

export default function Home() {
  return (
    <div className='bg-gradient-to-t from-[#11151f] to-[#000101] w-full md:rounded-b-[10%]'>
      <Header />
      <MainSection />
    </div>
  );
}