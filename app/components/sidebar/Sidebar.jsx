"use client";
import { FaHome, FaPlusSquare, FaChartBar, FaPowerOff, FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the sidebar on small screens when a link is clicked
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger button for small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 bg-teal-500 text-white focus:outline-none"
        aria-expanded={isOpen}
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-teal-500 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="flex items-center justify-center h-20">
          <div className="bg-gray-300 rounded-full w-16 h-16"></div>
        </div>
        <nav className="mt-10">
          <a
            href="#"
            onClick={handleLinkClick}
            className="flex items-center py-2 px-8 bg-teal-400 md:bg-transparent md:hover:bg-teal-400"
          >
            <FaHome className="mr-3 w-6 h-6" /> HOME
          </a>
          <a
            href="#"
            onClick={handleLinkClick}
            className="flex items-center py-2 px-8 hover:bg-teal-400"
          >
            <FaPlusSquare className="mr-3 w-6 h-6" /> AGREGAR
          </a>
          <a
            href="#"
            onClick={handleLinkClick}
            className="flex items-center py-2 px-8 hover:bg-teal-400"
          >
            <FaChartBar className="mr-3 w-6 h-6" /> ESTADISTICAS
          </a>
        </nav>
        <div className="mt-auto flex items-center justify-start py-4 px-7">
          <a
            href="#"
            onClick={handleLinkClick}
            className="flex items-center py-2 hover:bg-teal-400"
          >
            <FaPowerOff className="mr-3" /> SALIR
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
