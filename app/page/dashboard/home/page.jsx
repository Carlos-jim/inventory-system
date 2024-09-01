import Sidebar from '@/app/components/sidebar/Sidebar';
import TopNav from '@/app/components/sidebar/TopNav';
import MainContent from '@/app/components/MainContent/MainContent';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <MainContent />
      </div>
    </div>
  );
}
