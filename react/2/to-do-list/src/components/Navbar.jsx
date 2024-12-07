import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <span className="font-bold text-xl mx-9">iPlan</span>
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
      </nav>
    </div>
  );
};

export default Navbar;
