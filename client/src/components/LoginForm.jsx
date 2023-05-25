import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getApiKey, getSession } from "../app/actions/getSession";
import Swal from "sweetalert2";

const LoginForm = ({ setApi }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const { apiKeySession } = useSelector((state) => state.session);
  console.log(apiKeySession);
  useEffect(() => {}, []);

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await dispatch(getSession(apiKey));
  
      if (apiKeySession?.length === 0) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "API Key inválida",
          showConfirmButton: false,
          timer: 2000,
        });
        setApiKey("");
      } else {
        setApi(apiKey);
        navigate("/countries");
      }
    } catch (error) {
      console.log(error);
      // Manejar el error de la petición si es necesario
    }
  
    setLoading(false);
  };
  

  if (loading) {
    return (
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
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-fbfield bg-fixed bg-cover ">
      <div className="bg-gray-950 p-12 bg-opacity-60 rounded-lg border-2 ">
        <h1 className="pb-12 text-2xl font-extrabold text-white text-center">
          Bem-vindo a Meu Time
        </h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2 text-center  rounded-xl"
              htmlFor="apiKey"
            >
              Por gentileza, ingresse sua API Key
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="apiKey"
              type="text"
              placeholder="Enter your API key"
              value={apiKey}
              onChange={handleApiKeyChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:duration-500"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <Link
          to="https://dashboard.api-football.com/"
          target="_blank"
          className="text-white text-center text-sm font-bold mb-2   rounded-xl"
        >
          Não tem uma API Key? Clique aqui para se registrar
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
