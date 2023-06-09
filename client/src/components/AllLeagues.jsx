import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getLeagues from "../app/actions/getLeagues";
import { useDispatch, useSelector } from "react-redux";
import SeasonsModal from "./modals/SeasonsModal";

const AllLeagues = ({api}) => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { allLeagues } = useSelector((state) => state.leagues);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [leagueId, setLeagueId] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {   
      try {
    await dispatch(getLeagues(name,api))
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


  const filteredLeagues = allLeagues?.filter((info) =>
    info.league.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if(loading) return (
    <div className="flex flex-col justify-center items-center h-screen bg-fbfield bg-fixed bg-cover ">
      <div
        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-fbfield bg-fixed bg-cover justify-center">
      <div className="fixed top-16 w-full bg-black bg-opacity-90 border-t-2">
        <div className="container mx-auto py-4 text-center">
          <h1 className="text-xl lg:text-2xl sm:text-2xl text-white">
            Selecione uma liga da lista ou escreva na barra de pesquisa
          </h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Pesquisar Liga"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 border border-gray-300 rounded-xl w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/5 text-center text-black"
            />
          </div>
         
        </div>
      </div>

      <div className="container mx-auto mt-52 lg:mt-48 sm:mt-52 min-h-full">
        <div className="flex flex-col gap-2 p-4 text-white">
          {filteredLeagues.map((info, index) => (
            <div
              className="flex text-center h-12 justify-center"
              onClick={() => {
                setLeagueId(info.league.id);
                setModalIsOpen(true);
              }}
              key={index}
            >
              <div className="flex justify-between items-center w-full sm:w-1/2 border-gray-300 border-2 p-4 rounded-xl bg-gray-950 bg-opacity-50 hover:bg-white hover:bg-opacity-10 duration-500">
                <h3 className="font-bold">{info.league.name}</h3>
                <img
                  src={info.league.logo}
                  alt={info.league.name}
                  className="h-8 rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <SeasonsModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        leagueId={leagueId}
        allLeagues={allLeagues}
      />
    </div>
  );
};

export default AllLeagues;
