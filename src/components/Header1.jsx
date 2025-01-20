import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo1_trendsup.png';

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center h-[75px] w-full px-[70px] bg-[#F0F0FB] fixed left-0 top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/">  <img src={logo} alt="Logo" className='h-[52px] w-[166px]' />
          </NavLink>
        </div>

        {/* Menu Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            exact
            to="/"
            className="hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Dropdown Menu for mobile screens */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 p-4">
          <NavLink
            exact
            to="/"
            className="block py-2 hover:text-gray-300"
            activeClassName="border-b-2 border-white"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 hover:text-gray-300"
            activeClassName="border-b-2 border-white"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="block py-2 hover:text-gray-300"
            activeClassName="border-b-2 border-white"
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 hover:text-gray-300"
            activeClassName="border-b-2 border-white"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header1;
