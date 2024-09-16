import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 text-white fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-white" /> // Close icon
            ) : (
              <MenuIcon className="h-6 w-6 text-white" /> // Menu icon
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;