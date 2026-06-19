import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent py-4 px-2 w-full z-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link to="/">
            <img
              className="w-[53px] h-[53px] flex-shrink-0"
              style={{ borderRadius: '50%' }}
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-[#043f66] text-white w-3/4 transform transition-transform duration-300 ease-in-out z-20 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:translate-x-0 lg:w-auto lg:bg-transparent lg:static lg:h-auto`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 left-4 text-white text-3xl focus:outline-none lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>

          {/* Menu Links */}
          <ul className="flex flex-col items-start gap-6 px-8 py-12 lg:flex-row lg:items-center lg:gap-8 lg:p-0">
            <li>
              <Link
                to="/"
                className="text-white text-lg font-light hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white text-lg font-light hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white text-lg font-light hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white text-lg font-light hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
