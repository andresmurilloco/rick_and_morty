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
      <div>
        <button className="text-white" onClick={() => paginaAnterior()}>
          Previous
        </button>
        <p className="bg-white">
          Pagina {pagina} de {info}
        </p>
        <button className="text-white" onClick={() => paginaSiguiente()}>
          Next
        </button>
      </div>
      <div>
        {arrayPersonajes.map((personaje) => (
          <Personaje personaje={personaje} key={personaje.id}></Personaje>
        ))}
      </div>
    </>
  );
};

export default Personajes;
