import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex xl:mx-auto mx-[8%] px-40 xl:px-80 py-2 font-bold mt-4 rounded-lg bg-neutral-900 items-center justify-between max-w-7xl">
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
        target="_blank"
        href="https://github.com/amaan14999/sql-editor"
        className="text-neutral-300 hover:text-cyan-400 duration-200 transition-colors"
      >
        GitHub
      </a>
    </nav>
  );
};

export default Navbar;
