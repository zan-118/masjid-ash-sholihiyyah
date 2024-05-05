import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Ash-Sholihiyyah</h1>
        <nav>
          <ul className="flex space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
