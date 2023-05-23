import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCountries from "../app/actions/getAllCountries";
import { Link } from "react-router-dom";

const AllCountries = () => {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = allCountries.filter((info) =>
    info.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full pt-16 bg-fbfield bg-fixed w-full justify-center">
      <div className="flex flex-col text-center px-24 ">
        <div className=" text-white bg-gray-950 rounded-b-xl bg-opacity-30 ">
          <div className="text-xl uppercase ">
            <h1>selecione um país da lista ou escreva-o na barra de pesquisa</h1>
            
          </div>

          <div className="">
            <input
              type="text"
              placeholder="Pesquisar País"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 mt-2 border border-gray-300 rounded-xl w-[40%] text-center text-black"
            />
          </div>
          <div className="p-2">
          <button
              onClick={() => {
                if(searchTerm === ""){
                  dispatch(getAllCountries());
                }
                setSearchTerm("");
                }}
              className="border-black border-2 p-1 rounded-xl text-xs"
            >
              Carregar de novo todos os paises
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 min-h-screen overflow-y-clip p-4 justify-center w-full text-white">
        {filteredCountries.map((info, index) => (
          <Link to={`/leagues/${info.name}`} key={index}>
          <div
            
            className="flex text-center h-12 justify-center w-full "
          >
            
            <div className="flex justify-between items-center w-1/2 border-gray-300 border-2 p-4 rounded-xl bg-gray-950 bg-opacity-50 hover:bg-white hover:bg-opacity-10  duration-500"
            >
              <h3 className="font-bold">{info.name}</h3>
              <img src={info.flag} alt={info.name} className="h-8 rounded-xl" />
            </div>
            
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
