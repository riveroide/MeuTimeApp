import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ api , setApi }) => {
  const navigate = useNavigate();
  if (api === "")
    return (
      <nav className="bg-black py-4 px-6 fixed min-w-full">
        <Link to={"/"}>
          <h1 className="text-white text-2xl font-bold">Meu Time App</h1>
        </Link>
      </nav>
    );
  return (
    <nav className="bg-black py-4 px-6 fixed min-w-full">
      <div className="flex justify-between">
        <div>
        <Link to={"/countries"}>
          <h1 className="text-white text-2xl font-bold">Meu Time App</h1>
          
        </Link>
        </div>
        <div className="flex items-center">
        <button className="text-white border-2 px-4 p-1 rounded-xl border-red-600 hover:bg-red-600 hover:duration-500"
        onClick={()=>{
          setApi('')
          navigate('/')
        }}>Sair</button>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;
