import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../../public/healing gloves logo.png";
import Headeradta from './header.json';

const aboutmenus = [
  {
    label: "About Us",
    url: "/about-us",
    menuItems: [
      { label: "Gallery", link: "/about-us/gallery" },
    ],
  },
];

export default function MobileMenu({ isOpen, onClose }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMenuClick = (menuName) => (e) => {
    e.preventDefault(); // Prevent default link behavior
    setOpenMenu(openMenu === menuName ? null : menuName);
    setOpenSubmenu(null);
  };

  const handleSubmenuClick = (submenuName) => (e) => {
    e.preventDefault(); // Prevent default link behavior
    setOpenSubmenu(openSubmenu === submenuName ? null : submenuName);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-white w-10/12 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-t from-[#b9b7b7] to-[#ffff] text-white">
        <img src={logo} alt="Healing Gloves Logo" className="h-10" />
        <button onClick={onClose} className="text-white border border-[#2A3986] rounded-full">
          <FaTimes className="text-xl text-[#2A3986]" />
        </button>
      </div>
      <ul className="flex flex-col space-y-2 py-1 px-4 overflow-y-auto">
        <li className="border-b border-blue-50">
          <Link
            to="/"
            className="text-gray-700 text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
            onClick={onClose}
          >
            Home
          </Link>
        </li>

        {/* About Us Menu */}
        <li className="relative border-b border-blue-50">
          <div 
            className="flex items-center justify-start cursor-pointer"
            onClick={handleMenuClick("About Us")}
          >
            <span className="text-gray-700 text-lg font-bold hover:text-[#2A3986] transition-colors duration-300">
              About Us
            </span>
            <FaChevronDown className="text-gray-700 ml-2" size={10} />
          </div>
          {openMenu === "About Us" && (
            <div className="pl-4">
              {aboutmenus[0].menuItems.map((menuItem, index) => (
                <div key={index}>
                  <Link
                    to={menuItem.link}
                    className="block text-base font-medium text-gray-600 hover:text-[#2A3986] border-b border-blue-50"
                    onClick={onClose}
                  >
                    {menuItem.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </li>
        <li className="border-b border-blue-50">
          <Link
            to="/care"
            className="text-gray-700 text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
            onClick={onClose}
          >
            Cares
          </Link>
        </li>

        {/* Speciality Menu */}
        <li className="relative border-b border-blue-50">
          <div 
            className="flex items-center justify-start cursor-pointer"
            onClick={handleMenuClick("Speciality")}
          >
            <span className="text-gray-700 text-lg font-bold hover:text-[#2A3986] transition-colors duration-300">
              Speciality
            </span>
            <FaChevronDown className="text-gray-700 ml-2" size={10} />
          </div>
          {openMenu === "Speciality" && (
            <div className="pl-1 overflow-y-auto">
              {Headeradta.megaMenus[0].options.map((option, index) => (
                <div key={index} className="mb-2">
                  <div 
                    className="flex items-center justify-between border-b border-gray-100 cursor-pointer"
                    onClick={handleSubmenuClick(option.label)}
                  >
                    <span className="text-base font-medium text-gray-700 hover:text-[#2A3986]">
                      {option.label}
                    </span>
                    <FaChevronDown className="text-gray-700" size={5} />
                  </div>
                  {openSubmenu === option.label && (
                    <div className="pl-2 max-h-[150px] overflow-y-auto">
                      {option.subOptions.map((subOption, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subOption.url}
                          className="block text-sm font-normal text-gray-600 hover:text-[#2A3986] py-1 capitalize border-b border-gray-50"
                          onClick={onClose}
                        >
                          {subOption.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
        <li className="border-b border-blue-50">
          <Link
            to="/our-doctors"
            className="text-gray-700 text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
            onClick={onClose}
          >
            Our Doctors
          </Link>
        </li>

        <li className="border-b border-blue-50">
          <Link
            to="/blog"
            className="text-gray-700 text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
            onClick={onClose}
          >
            Blogs
          </Link>
        </li>

        <li className="border-b border-blue-50">
          <Link
            to="/contact-us"
            className="text-gray-700 text-lg font-bold hover:text-[#2A3986] transition-colors duration-300"
            onClick={onClose}
          >
            Reach Us
          </Link>
        </li>
      </ul>
    </div>
  );
}