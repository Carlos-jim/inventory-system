import Sidebar from '../../../components/sidebar/Sidebar';
import TopNav from '../../../components/sidebar/TopNav';
import MainContentAddProduct from '@/app/components/MainContent/MainContentAddProduct';


export default function AddProduct() {
    return(
        <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <MainContentAddProduct />
        </div>
      </div>
    )
}