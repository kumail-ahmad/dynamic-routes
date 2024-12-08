import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className=" bg-gray-700 rounded-md list-none">
        <div className="container md:w-3/2 flex gap-5 items-center text-white p-3 ">
          <div className="logo">
            <span className="font-bold text-2xl mx-9">iPlan</span>
          </div>
          <a className="hover:font-bold" href="/">
            <li>Home</li>
          </a>
          <a className="hover:font-bold" href="/">
            <li>About </li>
          </a>

          <li>
            <a className="hover:font-bold transition-all" href="/">
              Contact
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
