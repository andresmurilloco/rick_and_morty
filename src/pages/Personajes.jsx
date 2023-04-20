import React from "react";
import { useState, useEffect } from "react";
import {
  importarInfoPersonaje,
  importarPersonaje,
} from "../data/apiConnection";

//Componentes
import Personaje from "../components/Personaje";

const Personajes = () => {
  const [arrayPersonajes, setArrayPersonajes] = useState([]);
  const [info, setInfo] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const ConsultarApi = async () => {
      setArrayPersonajes(await importarPersonaje(pagina));
      setInfo(await importarInfoPersonaje(pagina));
    };
    ConsultarApi();
  }, []);

  useEffect(() => {
    const ConsultarApi = async () => {
      setArrayPersonajes(await importarPersonaje(pagina));
    };
    ConsultarApi();
  }, [pagina]);

  const paginaSiguiente = () => {
    const suma = pagina + 1;
    if (suma > pagina) {
      setPagina(suma);
    }
  };

  const paginaAnterior = () => {
    const resta = pagina - 1;
    if (resta >= 1) {
      setPagina(resta);
    }
  };

  return (
    <>
      <div className="font-gloria flex justify-between ml-[68%] mr-[8%] mt-7 bg-green-800 rounded-md border-2 border-yellow-500 p-1 mb-[-20px]">
        <button className="border-2 p-2 border-green-900 rounded-md hover:bg-green-600" onClick={() => paginaAnterior()}>
          Previous
        </button>
        <p className="border-1 p-2 rounded-md">
          Page {pagina} of {info}
        </p>
        <button className="border-2 border-green-900 p-2 rounded-md hover:bg-green-600" onClick={() => paginaSiguiente()}>
          Next
        </button>
      </div>
      <div>
        {arrayPersonajes.map((personaje) => (
          <Personaje personaje={personaje} key={personaje.id}></Personaje>
        ))}
      </div>
      <div className="font-gloria flex justify-between ml-[68%] mr-[8%] bg-green-800 rounded-md border-2 border-yellow-500 p-1 mt-[-20px] mb-5">
        <button className="border-2 p-2 border-green-900 rounded-md hover:bg-green-600" onClick={() => paginaAnterior()}>
          Previous
        </button>
        <p className="border-1 p-2 rounded-md">
          Page {pagina} of {info}
        </p>
        <button className="border-2 border-green-900 p-2 rounded-md hover:bg-green-600" onClick={() => paginaSiguiente()}>
          Next
        </button>
      </div>
    </>
  );
};

export default Personajes;
