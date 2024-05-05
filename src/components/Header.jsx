import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Ash-Sholihiyyah</h1>
        <nav className="md:block">
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/activities" className="hover:text-gray-300">
                Kegiatan
              </a>
            </li>
            <li>
              <a href="/information" className="hover:text-gray-300">
                Information
              </a>
            </li>
            <li>
              <a href="/organization" className="hover:text-gray-300">
                Lembaga
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
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
          {isOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 mt-2 rounded-md shadow-lg">
              <ul className="py-2 px-4 space-y-2">
                <li>
                  <a href="/" className="block hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/activities" className="block hover:text-gray-300">
                    Kegiatan
                  </a>
                </li>
                <li>
                  <a href="/information" className="block hover:text-gray-300">
                    Information
                  </a>
                </li>
                <li>
                  <a href="/organization" className="block hover:text-gray-300">
                    Lembaga
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
