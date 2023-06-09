import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResults, getTeam } from "../app/actions/getTeams";
import { useDispatch, useSelector } from "react-redux";
import ResultsModal from "./modals/ResultsModal";
import GoalsModal from "./modals/GoalsModal";
import FormationModal from "./modals/FormationModal";

const TeamInformation = ({api}) => {
  const dispatch = useDispatch();
  const { leagueId, seasonYear, teamId } = useParams();
  const { team } = useSelector((state) => state.teams);
  const {teaminfo} = useSelector((state) => state.teams); 
  const [players, setPlayers] = useState([]);
  const [openFormation, setOpenFormation] = useState(false);
  const [openGoals, setOpenGoals] = useState(false);
  const [openResults, setOpenResults] = useState(false);
  const [loading, setLoading] = useState(false);
 console.log( teaminfo)
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      
      try {
    await dispatch(getTeam(leagueId, seasonYear, teamId,api));
    await dispatch(getResults(leagueId, seasonYear, teamId,api))
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
fetchData()
  }, [dispatch]);

  useEffect(() => {
    if (team.length > 0) {
      setPlayers(team?.filter((e) => e.player));
    }
  }, [team]);

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
      <div className="fixed top-16 w-full bg-black border-t-2">
        <div className="container mx-auto py-4 text-center text-white flex justify-between">
          <div className="">
            <h1 className="text-xs md:text-base xl:text-xl  ">
              <button
                className="border-2 p-1 rounded-xl xl:p-2 hover:text-black hover:bg-white hover:duration-500"
                onClick={() => setOpenResults(true)}
              >
                Tabela de resultados
              </button>
            </h1>
          </div>
          <div>
            <h1 className="text-xs md:text-base xl:text-xl ">
              <button
                className="border-2 p-1 rounded-xl xl:p-2 hover:text-black hover:bg-white hover:duration-500"
                onClick={() => setOpenGoals(true)}
              >
                Gols Marcados
              </button>
            </h1>
          </div>
          <div>
            <h1 className="text-xs md:text-base xl:text-xl ">
              <button
                className="border-2 p-1 rounded-xl xl:p-2 hover:text-black hover:bg-white hover:duration-500"
                onClick={() => setOpenFormation(true)}
              >
                Formação mais utilizada
              </button>
            </h1>
          </div>
        </div>
      </div>

      <div className="container min-h-full mt-32 lg:mt-36 sm:mt-32 mx-auto">
        <div className="text-white text-center border-b-2 mb-2">
          <h1 className="text-3xl font-bold">
            Lista de jogadores de {team[0]?.statistics[0]?.team.name}
          </h1>
          <img
            src={team[0]?.statistics[0]?.team.logo}
            alt=""
            className="w-12 mx-auto"
          />
          <button
            onClick={() => dispatch(getTeam(leagueId, seasonYear, teamId))}
          >
            Load Information
          </button>
        </div>
        <div className="text-white flex w-full justify-center text-center gap-12 ">
          <div className="w-full lg:w-[35%] border-4 rounded-xl bg-gray-950 ">
            Nome
          </div>
          <div className="w-full lg:w-[15%] border-4 rounded-xl bg-gray-950 ">
            Edade
          </div>
          <div className="w-full lg:w-[35%] border-4 rounded-xl bg-gray-950 ">
            Nacionalidade
          </div>
        </div>
        <div className="w-fu">
          {players?.map((info, index) => (
            <div
              className="text-white flex w-full justify-center text-center bg-gray-950 bg-opacity-50 mx-auto border-b-white border-b-2 gap-12"
              key={index}
            >
              <div className="w-full lg:w-[35%] hover:">{info.player.name}</div>
              <div className="w-full lg:w-[15%]">{info.player.age}</div>
              <div className="w-full lg:w-[35%]">{info.player.nationality}</div>
            </div>
          ))}
        </div>
      </div>
      <ResultsModal openResults={openResults} setOpenResults={setOpenResults} />
      <GoalsModal openGoals={openGoals} setOpenGoals={setOpenGoals} />
      <FormationModal
        openFormation={openFormation}
        setOpenFormation={setOpenFormation}
      />
    </div>
  );
};

export default TeamInformation;
