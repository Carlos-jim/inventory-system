import Sidebar from '@/app/components/sidebar/Sidebar';
import TopNav from '@/app/components/sidebar/TopNav';
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