import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import logo from "../../Images/logo.png";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  // mobile menu toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let customClass;
  if (isOpen) {
    customClass = "sm:hidden";
  } else {
    customClass = "sm:hidden cmobile-menu";
  }

  return (
    <div>
      <nav className="bg-white">
        <div className="container mx-auto">
          <div className="">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={toggle}
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </NavLink>
                  <NavLink to="/">
                    <img
                      className="hidden lg:block h-8 w-auto mobileLogo"
                      src={logo}
                      alt="Workflow"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/home"
                      className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-regular"
                      activeClassName="bg-gray-900 text-white"
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to="/about"
                      className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-regular"
                      activeClassName="bg-gray-900 text-white"
                    >
                      About
                    </NavLink>

                    <NavLink
                      to="/contact"
                      className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-regular"
                      activeClassName="bg-gray-900 text-white"
                    >
                      Contact Us
                    </NavLink>
                    {user?.email ? (
                      <>
                        <NavLink
                          to="/my-bookings"
                          className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
                          activeClassName="bg-gray-900 text-white"
                          onClick={toggle}
                        >
                          My Bookings
                        </NavLink>

                        <NavLink
                          to="/manage-all-bookings"
                          className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
                          activeClassName="bg-gray-900 text-white"
                          onClick={toggle}
                        >
                          Manage All Bookings
                        </NavLink>

                        <NavLink
                          to="/add-a-new-service"
                          className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
                          activeClassName="bg-gray-900 text-white"
                          onClick={toggle}
                        >
                          Add A New Service
                        </NavLink>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative">
                  <div>
                    {user?.email ? (
                      <button onClick={logOut}>
                        {user?.displayName}(Log Out)
                      </button>
                    ) : (
                      <Link to="/login">
                        <button>Log in</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={customClass} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 relative">
            <NavLink
              to="/home"
              className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
              activeClassName="bg-gray-900 text-white"
              onClick={toggle}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
              activeClassName="bg-gray-900 text-white"
              onClick={toggle}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
              activeClassName="bg-gray-900 text-white"
              onClick={toggle}
            >
              Contact Us
            </NavLink>

            {user?.email ? (
              <>
                <NavLink
                  to="/my-bookings"
                  className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
                  activeClassName="bg-gray-900 text-white"
                  onClick={toggle}
                >
                  My Bookings
                </NavLink>

                <NavLink
                  to="/manage-all-bookings"
                  className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
                  activeClassName="bg-gray-900 text-white"
                  onClick={toggle}
                >
                  Manage All Bookings
                </NavLink>

                <NavLink
                  to="/add-a-new-service"
                  className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
                  activeClassName="bg-gray-900 text-white"
                  onClick={toggle}
                >
                  Add A New Service
                </NavLink>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
