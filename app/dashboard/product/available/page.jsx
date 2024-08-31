import Sidebar from '../../../components/sidebar/Sidebar';
import TopNav from '@/app/components/sidebar/TopNav';
import MainContentListProduct from '@/app/components/MainContent/MainContentListProduct';


export default function AddProduct() {
    return(
        <div className="flex">
          <Sidebar/>
        <div className="flex-1 flex flex-col">
          <TopNav />
          <MainContentListProduct />
        </div>
      </div>
    )
}