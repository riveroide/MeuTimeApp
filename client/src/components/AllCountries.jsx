import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllCountries from "../app/actions/getAllCountries";
import { Link } from "react-router-dom";

const AllCountries = ({api}) => {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  console.log('apikey dentro de countries',api)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
    await dispatch(getAllCountries(api))
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
fetchData()
  }, [dispatch]);
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredCountries = allCountries.filter((info) =>
    info.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if(loading) return <h1>Loading...</h1>

  return (
    <div className="flex flex-col min-h-screen bg-fbfield bg-fixed bg-cover justify-center">
      <div className="fixed top-16 w-full bg-black border-t-2 bg-opacity-90">
        <div className="container mx-auto py-4 text-center ">
          <h1 className="text-2xl text-white">
            Selecione um país da lista ou escreva-o na barra de pesquisa
          </h1>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Pesquisar País"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 border border-gray-300 rounded-xl w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/5 text-center text-black"
            />
          </div>
          <div className="mt-2">
            <button
              onClick={() => {
                if (searchTerm === "") {
                  dispatch(getAllCountries(apiKey));
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

      <div className="container mx-auto mt-60 lg:mt-52 sm:mt-52 min-h-full">
        <div className="flex flex-col gap-2 p-4 text-white">
          {filteredCountries.map((info, index) => (
            <Link to={`/leagues/${info.name}`} key={index}>
              <div className="flex text-center h-12 justify-center w-full ">
                <div className="flex justify-between items-center w-full sm:w-1/2 border-gray-300 border-2 p-4 rounded-xl bg-gray-950 bg-opacity-50 hover:bg-white hover:bg-opacity-10 duration-500">
                  <h3 className="font-bold">{info.name}</h3>
                  <img
                    src={info.flag}
                    alt={info.name}
                    className="h-8 rounded-xl"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCountries;
