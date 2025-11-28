import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/service" },
     { name: "Blogs", link: "/blogs" },
    { name: "Contact Us", link: "/contact" },
    
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/Logo/Teprezlogo.jpg"
            alt="Logo"
            className="h-10 w-[120px] sm:h-12 sm:w-[160px] md:h-14 md:w-[100px] lg:h-16 lg:w-[220px] xl:h-18 xl:w-[200px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-gray-800 font-semibold text-sm lg:text-base xl:text-lg hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-white shadow-xl text-gray-900 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <span className="text-lg font-bold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Drawer Menu */}
        <ul className="flex flex-col space-y-6 p-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className="block text-lg font-medium hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
