import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import header_icon from "../../../Images/header_icon.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const [show, setShow] = useState(false);
  const history = useHistory();
  return (
    <div className="bg-gradient-to-tl from-gray-100 to-gray-500">
      <nav className="w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-12 h-12" src={header_icon} alt="" />
            <p className="ml-2 lg:ml-4 text-gray-700 lg:text-2xl font-bold text-gray-800">
              SKOOTER
            </p>
          </div>
          <div>
            <div
              onClick={() => setShow(!show)}
              className="sm:block md:hidden lg:hidden text-red-500 hover:text-red-700 focus:text-red-700 focus:outline-none"
            >
              <svg
                aria-haspopup="true"
                aria-label="Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </div>
            <div
              id="menu"
              className={show ? "lg:hidden block" : "md:block lg:block hidden"}
            >
              <div
                onClick={() => setShow(!show)}
                className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
              <ul className="flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 z-20 sm:bg-gray-200 lg:bg-transparent">
                <li className="nav-item text-gray-800 hover:text-gray-900 cursor-pointer md:ml-10 pt-10 md:pt-0">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="nav-item text-gray-800 hover:text-gray-900 cursor-pointer md:ml-10 pt-10 md:pt-0">
                  <NavLink to="/skooters">Skooters</NavLink>
                </li>
                {user.email && (
                  <li className="nav-item text-gray-800 hover:text-gray-900 cursor-pointer md:ml-10 pt-10 md:pt-0">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                )}
                <li className="nav-item text-gray-800 hover:text-gray-900 cursor-pointer md:ml-10 pt-10 md:pt-0">
                  <NavLink to="/about">About</NavLink>
                </li>
                {user.email ? (
                  <li className="md:ml-10 pt-10 md:pt-0 flex items-center gap-2">
                    <p className="text-red-500 font-bold text-lg">
                      {user.displayName}
                    </p>
                    <img
                      className="h-10 w-10"
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://img.icons8.com/external-bearicons-glyph-bearicons/2x/external-User-essential-collection-bearicons-glyph-bearicons.png"
                      }
                      alt=""
                    />
                    <button
                      onClick={logOut}
                      className="bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-600"
                    >
                      log out
                    </button>
                  </li>
                ) : (
                  <li className="md:ml-10 pt-10 md:pt-0 flex items-center gap-2">
                    <button
                      onClick={()=>history.push("/login")}
                      className="bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-600"
                    >
                      log in
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
