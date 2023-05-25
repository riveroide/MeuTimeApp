import React from 'react'
import { useSelector } from 'react-redux';



const ResultsModal = ({openResults, setOpenResults}) => {
   const {teaminfo} = useSelector((state) => state.teams); 
  console.log(teaminfo)
   if(openResults){
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center text-black">
      <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-300 opacity-100 rounded-2xl">
        <div className="p-4">
          <h2 className="text-xl font-bold text-center">Resultados</h2>
          {/* Results List */}
          <div className='grid grid-cols-1 gap-2 mt-4 text-center'>
            <p>Total de jogos: {teaminfo?.fixtures.played.total}</p>
            <p>Total de vitorias: {teaminfo?.fixtures.wins.total}</p>
            <p>Total de derrotas: {teaminfo?.fixtures.loses.total}</p>
            <p>Total de empates: {teaminfo?.fixtures.draws.total}</p>
            </div>
        </div>
        <div className="flex justify-end p-4">
          <button
            onClick={() => {
              setOpenResults(false);
              
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )}
  else{
    return null
  }
}

export default ResultsModal