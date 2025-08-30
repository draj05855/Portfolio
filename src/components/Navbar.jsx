import React from "react";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-10 py-7 flex items-center justify-between">
        <p className="m-2 text-white text-xl font-semibold">RK</p>

        <div className="m-8 flex items-center gap-5 text-3xl text-white">
          <FaInstagram />
          <FaLinkedin />
          <FaGithubSquare />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
