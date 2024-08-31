import { FaHome } from 'react-icons/fa';

export default function TopNav() {
    return (
      <div className="flex items-center justify-between p-4">
        <button className="text-white items-center flex bg-teal-500 rounded-md px-4 py-2"> <FaHome className="mr-2 w-6 h-5" />HOME</button>
      </div>
    );
  }
  