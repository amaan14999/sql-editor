import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex mx-8 py-2 px-4 font-bold gap-48 mt-4 rounded-lg bg-neutral-900 items-center justify-center">
      <NavLink
        to="/"
        className="text-neutral-300 hover:text-cyan-400 duration-200 transition-colors"
        activeClassName="text-neutral-100"
      >
        Home
      </NavLink>
      <NavLink
        to="/editor"
        className="text-neutral-300 hover:text-cyan-400 duration-200 transition-colors"
        activeClassName="text-neutral-100"
      >
        Editor
      </NavLink>
      <a
        href="#"
        className="text-neutral-300 hover:text-cyan-400 duration-200 transition-colors"
      >
        Login
      </a>
      <a
        href="#"
        className="text-neutral-300 hover:text-cyan-400 duration-200 transition-colors"
      >
        Contact
      </a>
      <a
        href="#"
        className="text-neutral-300 hover:text-cyan-400 duration-200 transition-colors"
      >
        GitHub
      </a>
    </nav>
  );
};

export default Navbar;
