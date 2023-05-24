import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllTeams } from '../app/actions/getTeams';

const AllTeams = () => {
    const dispatch = useDispatch();
    const {leagueId, seasonYear} = useParams();
    
    const {allTeams} = useSelector((state) => state.teams);
    console.log(allTeams)
    const [searchTerm, setSearchTerm] = useState('');
    const [allTeamsMapped, setAllTeamsMapped] = useState([]);
    
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };

      const filteredLeagues = allTeams?.filter((info) =>
      info.team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="flex flex-col min-h-screen bg-fbfield bg-fixed bg-cover justify-center">
          <div className="fixed top-16 w-full bg-black border-t-2">
            <div className="container mx-auto py-4 text-center">
              <h1 className="text-2xl text-white">
                Selecione uma time da lista ou escreva na barra de pesquisa
              </h1>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Pesquisar Time"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="p-2 border border-gray-300 rounded-xl w-full sm:w-2/4 md:w-1/3 lg:w-1/4 xl:w-1/5 text-center text-black"
                />
              </div>
              <div className="mt-2">
                <button
                  onClick={() => {
                    if (searchTerm === '') {
                      dispatch(getAllTeams(leagueId, seasonYear));
                    }
                    setSearchTerm('');
                  }}
                  className="border-black border-2 p-1 rounded-xl text-xs"
                >
                  Carregar de novo todas as ligas
                </button>
              </div>
            </div>
          </div>
    
          <div className="container mx-auto mt-60 lg:mt-52 sm:mt-52 min-h-full">
            <div className="flex flex-col gap-2 p-4 text-white">
              {filteredLeagues.map((info, index) => (
               <Link to={`/${leagueId}/${seasonYear}/${info.team.id}`}>
                  <div className="flex text-center h-12 justify-center"
                  >
                    <div className="flex justify-between items-center w-full sm:w-1/2 border-gray-300 border-2 p-4 rounded-xl bg-gray-950 bg-opacity-50 hover:bg-white hover:bg-opacity-10 duration-500">
                      <h3 className="font-bold">{info.team.name}</h3>
                      <img src={info.team.logo} alt={info.team.name} className="h-8 rounded-xl" />
                    </div>
                  </div>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      );
}

export default AllTeams