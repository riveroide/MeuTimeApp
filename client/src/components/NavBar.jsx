import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black py-4 px-6 fixed min-w-full">
      <Link to={"/"}>
      <h1 className="text-white text-2xl font-bold">Meu Time</h1>
      </Link>
    
    </nav>
  );
};

export default NavBar;
