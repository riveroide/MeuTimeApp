import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { useSelector } from 'react-redux';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const GoalsModal = ({openGoals, setOpenGoals}) => {
  const {teaminfo} = useSelector((state) => state.teams);
  console.log('teaminfo', teaminfo)
  const minutesArray = Object.keys(teaminfo?.goals?.for?.minute ?? {}).slice(0, 6).map(key => {
    return teaminfo?.goals?.for?.minute[key]?.total;
  });
  
  
console.log('graph',minutesArray)


  const data = {
    labels:['0-15','15-30','30-45','45-60','60-75','75-90'],
    datasets: [
      {
        label: 'Gols Marcados',
        data:minutesArray,
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',

      },
    ],
  };
  const options = {
    plugins:{
      legend:false,
    },
    scales:{
      y:{
min:0,
max:20,
      }
    }
  }
  if(!openGoals) return null
  return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center text-black">
      <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 bg-gray-300 opacity-100 rounded-2xl p-4">
      <div>
      <h2 className="text-xl font-bold text-center">Gols Marcados</h2>

      <Line data={data} options={options}/>
      </div>
   
      <div className="flex justify-end p-4">
          <button
            onClick={() => {
              setOpenGoals(false);
              
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default GoalsModal