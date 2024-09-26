import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/healing gloves logo.png";
import home from "../../../public/home.png";
import callicon from "../../../public/callicon.png";
import headerData from "./header.json";
import { BiSearch } from "react-icons/bi";
import { RiMenu2Line } from "react-icons/ri";
import MobileMenu from "./Mobilemenu";
import { Link } from "react-router-dom";

const styles = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .mega-menu {
    position: static;
    text-transform: capitalize;
  }
     .mega-menu-about {
    position: static;
    text-transform: capitalize;
  }
    .mega-menu-content-about {
    position: absolute;
    top: 100%;
    background-color: white;
    border: 1px solid #e2e8f0;
    border-radius: 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 10;
    animation: slideDown 0.3s ease forwards;
    margin-top: 0;
    justify-content: center;
    padding: 10px 30px;
    text-transform: capitalize;
  }
  

  .mega-menu-content {
    position: absolute;
    left: 10%;
    right: 10%;
    top: 100%;
    background-color: white;
    border: 1px solid #e2e8f0;
    border-radius: 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 10;
    animation: slideDown 0.3s ease forwards;
    width: 80vw;
    margin-top: 0;
    justify-content: center;
    padding: 5px 10px;
    text-transform: capitalize;
  }

  .mega-menu-item {
    margin: 0px;
    text-transform: capitalize;
  }

  .submenu {
    display: block;
    margin-top: 4px;
    text-transform: capitalize;
  }
  

  .menu-item-underline {
    position: relative;
  }

  .menu-item-underline::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #FB3D9D;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  .menu-item-underline:hover::after {
    transform: scaleX(1);
  }
`;

const aboutmenus = [
  {
    label: "About Us",
    url: "/about-us",
    menuItems: [
      // { label: "News and Media", link: "/#about-us/news&media" },
      { label: "Gallery", link: "/about-us/gallery" },
    ],
  },
];

export default function Navbar() {
  const { megaMenus } = headerData;
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

  }


  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      // Filter the megaMenus based on the search query
      const results = megaMenus.flatMap((menu) =>
        menu.options.flatMap((option) =>
          option.subOptions.filter((subOption) =>
            subOption.label.toLowerCase().includes(query)
          )
        )
      );

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
  const handleResultClick = () => {
    // Clear the search results and search query when a result is clicked
    setSearchResults([]);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menuName) => {
    setOpenMenu(menuName);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const handleClick = (menuName, url) => {
    if (openMenu === menuName) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menuName);
    }
    if (url) {
      setTimeout(() => {
        setOpenMenu(null);
      }, 100);
      window.location.href = url;
    }
  };
  console.log(isMobileMenuOpen);

  return (
    <>
      <style>
        {`
        ${styles}
        .mega-menu-content::before,
        .mega-menu-content-about::before{
          content: '';
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 10px;
          background: transparent;
        }
      `}
      </style>

      <header className="w-screen sticky top-0 z-50">
        <nav className="flex  justify-evenly items-center bg-white shadow  py-2 :px-20">
          <div className="flex items-center lg:mb-2  mb-0">
            <img
              src={logo}
              alt="Healing Gloves"
              className="max-w-full lg:h-[120px] h-10"
            />
          </div>

          <div className="flex items-center  ">
            <input
              type="text"
              placeholder="Search "
              value={searchQuery}
              onChange={handleSearch}
              className="border border-[#2a398650] xl:px-12 md:px-10 lg:px-10 px-2 xl:py-3 md:py-0 lg:py-0 py-0 outline-none sm:rounded-lg relative xl:w-[560px] lg:w-[400px] md:w-[300px] w-32 xl:text-2xl lg:text-xl text-[10px]"
            />
            <div className=" absolute xl:left-auto left-52">
              <BiSearch className="sm:ml-2 md:text-base lg:text-xl xl:text-2xl text-[10px]" color="#2a398680" />
            </div>

            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 bg-white border mt-2 w-full max-h-60 overflow-y-auto shadow-lg">
                <ul>
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100"
                      onClick={handleResultClick}
                    >
                      <Link to={result.url} className="text-sm text-gray-800">
                        {result.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:flex flex lg:gap-1 gap-2">
            <div className="flex items-center lg:space-x-2 rounded-full lg:py-2 py-1 lg:px-4 px-1 space-x-1">
              <img
                src={callicon}
                alt="call-icon"
                className="lg:h-9  h-[10px]"
              />
              <span className="lg:text-2xl text-gray-600 text-[7px] ">
                <a
                  href="tel:+917015881552"
                  className="text-[#3E3E3E] font-bold "
                >
                  +91-70158 81552
                </a>
              </span>
            </div>


          </div>
          <button className="lg:hidden text-[#2A3986]" onClick={toggleMobileMenu}>
            <RiMenu2Line className="text-xl" />
          </button>
        </nav>

        <nav className="bg-[#2A3986] w-screen hidden lg:block">

          <div className="max-w-full py-1">

            <ul
              className="flex items-center justify-center space-x-16"
              ref={menuRef}
            >
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-[#f9cde1] transition duration-300"
                >
                  <img src={home} alt="home" className="max-w-full h-auto" />
                </Link>
              </li>

              <li
                className="relative group mega-menu-about"
                onMouseEnter={() => handleMouseEnter("About Us")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/about-us"
                  className="text-white hover:text-[#f9cde1] text-[20px] font-bold transition duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("About Us", "/about-us");
                  }}
                >
                  About Us
                  <FaChevronDown className="ml-1" />
                </Link>
                {openMenu === "About Us" && (
                  <div className="mega-menu-content-about">
                    <div className="gallery-submenu">
                      {aboutmenus[0].menuItems.map((menuItem, index) => (
                        <div key={index} className="gallery-item">

                          <Link
                            to={menuItem.link}
                            className="block text-md font-medium text-gray-700 hover:text-[#2A3986]"
                            onClick={() =>
                              handleClick("About Us", menuItem.link)
                            }
                          >
                            {menuItem.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/care"
                  className="text-white hover:text-[#f9cde1] text-[20px] font-bold transition duration-300"
                >
                  Cares
                </Link>
              </li>

              {megaMenus.map((menuItem) => (
                <li
                  key={menuItem.name}
                  className="relative group mega-menu"
                  onMouseEnter={() => handleMouseEnter(menuItem.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={menuItem.url}
                    className={`text-white hover:text-[#f9cde1] transition duration-300 flex items-center text-[20px] font-bold`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(menuItem.name, menuItem.url);
                    }}
                  >
                    {menuItem.name}
                    <FaChevronDown className="ml-1" />
                  </Link>
                  {openMenu === menuItem.name && (
                    <div className="mega-menu-content text-left grid grid-cols-4">
                      {menuItem.options.map((option, index) => (
                        <div
                          key={index}
                          className="mega-menu-item px-3 py-3"
                          onMouseEnter={() => handleMouseEnter(menuItem.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            to={option.url}
                            className="block text-md font-semibold text-gray-600 hover:text-[#2A3986] menu-item-underline"
                            onClick={() =>
                              handleClick(menuItem.name, option.url)
                            }
                          >
                            {option.label}
                          </Link>
                          {option.subOptions && (
                            <div className="submenu text-left">
                              {option.subOptions.map((subOption, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subOption.url}
                                  className="block py-1 text-sm text-gray-700 font-[450]  hover:text-[#2A3986] transition duration-300 hover:bg-gray-100"
                                  onClick={() =>
                                    handleClick(menuItem.name, subOption.url)
                                  }
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
              ))}

              <li>
                <Link
                  to="/our-doctors"
                  className="text-white hover:text-[#f9cde1] text-[20px] font-bold transition duration-300"
                >
                  Our Doctors
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-white hover:text-[#f9cde1] text-[20px] font-bold transition duration-300"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="text-white hover:text-[#f9cde1] text-[20px] font-bold transition duration-300"
                >
                  Reach Us
                </Link>
              </li>
            </ul>
          </div>
          <button className="lg:hidden" onClick={toggleMobileMenu}>
            <FaBars className="text-2xl" />
          </button>
        </nav>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      </header>
    </>
  );
}