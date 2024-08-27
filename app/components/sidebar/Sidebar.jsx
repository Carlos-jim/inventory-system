"use client"
import { FaHome, FaPlusSquare, FaChartBar, FaPowerOff, FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button for small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 bg-teal-500 text-white"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`flex flex-col h-screen bg-teal-500 text-white w-64 fixed z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static`}>
        <div className="flex items-center justify-center h-20">
          <div className="bg-gray-300 rounded-full w-16 h-16"></div>
        </div>
        <nav className="mt-10">
          <a href="#" className="flex items-center py-2 px-8 bg-teal-400">
            <FaHome className="mr-3 w-7 h-7" /> HOME
          </a>
          <a href="#" className="flex items-center py-2 px-8 hover:bg-teal-400">
            <FaPlusSquare className="mr-3 w-7 h-7" /> AGREGAR
          </a>
          <a href="#" className="flex items-center py-2 px-8 hover:bg-teal-400">
            <FaChartBar className="mr-3 w-7 h-7" /> ESTADISTICAS
          </a>
        </nav>
        <div className="mt-auto flex items-center justify-start py-4 px-7">
          <a href="#" className="flex items-center py-2 hover:bg-teal-400">
            <FaPowerOff className="mr-3 w-7 h-7" /> SALIR
          </a>
        </div>
      </div>
      
      {/* Backdrop when sidebar is open on small screens */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 md:hidden"
        ></div>
      )}
    </>
  );
}
