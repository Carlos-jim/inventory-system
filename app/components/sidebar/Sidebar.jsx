"use client"
import { useState } from 'react';
import { FaHome, FaBoxOpen, FaChartBar, FaPowerOff } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen ${isOpen ? 'w-64' : 'w-20'} bg-teal-500 p-5 relative duration-300`}>
      {/* Hamburger Menu */}
      <div className="absolute top-3 left-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="h-6 w-6 text-white">
          <div className="w-full h-1 bg-white mb-1"></div>
          <div className="w-full h-1 bg-white mb-1"></div>
          <div className="w-full h-1 bg-white"></div>
        </div>
      </div>

      {/* Profile Circle */}
      <div className="flex justify-center">
        <div className={`h-16 w-16 rounded-full bg-gray-300 mt-10 ${!isOpen && 'hidden'}`}></div>
      </div>

      {/* Menu Items */}
      <ul className="pt-10">
        <li className={`flex items-center p-2 my-2 text-white ${isOpen ? 'hover:bg-teal-400' : 'justify-center'}`}>
          <FaHome size={24} />
          {isOpen && <span className="ml-4">Home</span>}
        </li>
        <li className={`flex items-center p-2 my-2 text-white ${isOpen ? 'hover:bg-teal-400' : 'justify-center'}`}>
          <AiOutlinePlus size={24} />
          {isOpen && <span className="ml-4">Agregar</span>}
        </li>
        <li className={`flex items-center p-2 my-2 text-white ${isOpen ? 'hover:bg-teal-400 bg-teal-400 rounded-lg' : 'justify-center'}`}>
          <FaBoxOpen size={24} />
          {isOpen && <span className="ml-4">Disponibles</span>}
        </li>
        <li className={`flex items-center p-2 my-2 text-white ${isOpen ? 'hover:bg-teal-400' : 'justify-center'}`}>
          <FaChartBar size={24} />
          {isOpen && <span className="ml-4">Estadísticas</span>}
        </li>
      </ul>

      {/* Logout */}
      <div className={`absolute bottom-5 w-full ${isOpen ? 'text-center' : 'flex items-center'}`}>
        <button className="flex items-center w-full p-2 text-white hover:bg-teal-400">
          <FaPowerOff size={24} />
          {isOpen && <span className="ml-4">Salir</span>}
        </button>
      </div>
    </div>
  );
}
