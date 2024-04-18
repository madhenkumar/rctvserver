"use client"
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50">
      <div className="relative">

        <div className="absolute rounded-b-lg" />
        
        <div className="flex justify-between items-center px-4 py-4 relative z-10">
          <div className="flex items-center">
           <a href="/home"> <img src="../logo_s.png" alt="Logo" className="w-10 h-8 scale-150" /></a>
            <a href="/home" className="ml-2 text-white font-bold">RCTV</a>
          </div>
          <div className="hidden md:flex items-center">
            <a href="/home#about-us" className="text-white mr-4 hover:border-purple-500 px-2 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300">About Us</a>
            <a href="/gallery" className="text-white hover:border-purple-500 px-2 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300">Gallery</a>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* <div className="hidden md:flex items-center">
            {image &&
            <img
            src={image}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
            }
            {!image &&
            <img
            src="/header.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />}
            
          </div> */}
        </div>
       
        {isMobileMenuOpen && (
  <div className="md:hidden">
    <a href="/home#about-us" className="block py-2 px-4 text-white hover:text-purple-500">About Us</a>
    <a href="/gallery" className="block py-2 px-4 text-white hover:text-purple-500">Gallery</a>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
