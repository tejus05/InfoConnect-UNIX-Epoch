import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav
      className="bg-blue-400 p-4 text-lg shadow-md shadow-gray-500 drop-shadow"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-3xl flex items-center italic">
            <img
              src="../public/logo.png"
              alt="infoconnect-logo"
              className="lg:h-[80px] h-[70px]"
            />
            <h1 className="text-3xl font-bold">
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>I</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>N</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>F</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>O</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>C</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>O</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>N</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>N</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>E</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>C</span>
              <span className="text-[25px] lg:text-[29px] ml-[3px]" style={{ fontFamily: 'arial' }}>T</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-grow md:items-center md:justify-end text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/process"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Process
          </NavLink>
          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Documents
          </NavLink>
          <NavLink
            to="/fees"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Fees
          </NavLink>
          <NavLink
            to="/handbook"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Handbook
          </NavLink>
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-white"
              } duration-200 hover:underline hover:text-black px-3 py-2`
            }
          >
            Feedback
          </NavLink>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Insert your menu icon here */}
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-3`}>
        {/* Mobile Menu */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/process"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Process
        </NavLink>
        <NavLink
          to="/documents"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Documents
        </NavLink>
        <NavLink
          to="/fees"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Fees
        </NavLink>
        <NavLink
          to="/handbook"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Handbook
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-white"
            } duration-200 hover:underline hover:text-black block py-2 px-4 text-white`
          }
        >
          Feedback
        </NavLink>
      </div>
      <style>
        {`
        /* Styles for responsive behavior */
        @media screen and (max-width: 950px) {
          .md\\:hidden {
            display: block !important;
          }
          
          .md\\:block {
            display: none !important;
          }
        
          .hidden {
            display: none !important;
          }
        
          .block {
            display: block !important;
          }
        }
      `}
      </style>
    </nav>
  );
};

export default Navbar;
