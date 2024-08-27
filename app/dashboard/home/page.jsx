import Sidebar from '../../components/sidebar/Sidebar';
import TopNav from '../../components/sidebar/TopNav';
import MainContent from '../../components/MainContent/MainContent';

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
