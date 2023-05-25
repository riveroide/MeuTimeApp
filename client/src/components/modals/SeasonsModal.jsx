import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SeasonsModal = ({
  modalIsOpen,
  setModalIsOpen,
  leagueId,
  allLeagues,
}) => {
  const [seasons, setSeasons] = useState([]);


  useEffect(() => {
    setSeasons(allLeagues.filter((info) => info.league.id === leagueId));
  }, [leagueId]);

  if (!modalIsOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center text-black">
      <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-300 opacity-100 rounded-2xl">
        <div className="p-4">
          <h2 className="text-xl font-bold text-center">Temporadas da liga</h2>
          {/* Seasons List */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {seasons[0]?.seasons.map((season, index) => (
              <Link to={`/${leagueId}/${season.year}`} key={index}>
                <div
                  className="mb-2 border-2 p-2 rounded-xl text-center hover:bg-gray-400 hover:duration-500"
                >
                  <p className="font-bold">{season.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-end p-4">
          <button
            onClick={() => {
              setModalIsOpen(false);
              setSeasons([]);
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonsModal;
