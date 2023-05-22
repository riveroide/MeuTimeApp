import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllInfo from "../app/actions/getAllInfo";

const AllInfo = () => {
  const dispatch = useDispatch();

  const { AllInfo } = useSelector((state) => state.info);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 60;

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = AllInfo?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );


  return (
    <div>
      <h1>AllInfo</h1>
      <button onClick={() => dispatch(getAllInfo())}>Charge Countries</button>
      <div className="grid grid-cols-12 gap-2">
        {currentCountries?.map((info, index) => (
          <div key={index} className="flex justify-center items-center">
            <div>
              <h3>{info.name}</h3>
              <img src={info.flag} alt={info.name} />
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* Botones de paginación */}
        {AllInfo && (
          <div className="flex justify-center mt-4">
            {Array.from(
              { length: Math.ceil(AllInfo.length / countriesPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`mx-1 px-2 py-1 rounded ${
                    currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};


export default AllInfo;
