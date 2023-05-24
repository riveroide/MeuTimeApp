import React from "react";
import { useSelector } from "react-redux";

const FormationModal = ({ openFormation, setOpenFormation }) => {
  const { teaminfo } = useSelector((state) => state.teams);
  let mostUsedFormation = "";
  let maxPlayed = 0;

  teaminfo?.lineups.forEach((lineup) => {
    if (lineup.played > maxPlayed) {
      mostUsedFormation = lineup.formation;
      maxPlayed = lineup.played;
    }
  });
  console.log(mostUsedFormation)
  if (!openFormation) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center text-black">
      <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-300 opacity-100 rounded-2xl">
        <div className="p-4">
          <h2 className="text-xl font-bold text-center">
            Formação mais utilizada na temporada
          </h2>
          <div className="py-2">
          {mostUsedFormation? <h1 className="text-xl text-center font-bold border-2 border-black p-2 mx-12 rounded-xl">{mostUsedFormation}</h1>: <h1>Não há dados suficientes para mostrar a formação mais utilizada</h1>}
          </div>
          
        </div>
        <div className="flex justify-end p-4">
          <button
            onClick={() => {
              setOpenFormation(false);
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

export default FormationModal;
