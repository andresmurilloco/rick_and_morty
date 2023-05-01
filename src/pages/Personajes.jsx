import React from "react";
import { useState, useEffect, Suspense, lazy } from "react";
import {
  importarInfoPersonaje,
  importarPersonaje,
} from "../data/apiConnection";

//Componentes
import Cargando from '../components/Cargando'
const Personaje = lazy(()=>import ("../components/Personaje"))

//Styles
import '../css/cuentaPaginas.css'

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
      <div className="contenedor-top">
        <button className="boton" onClick={() => paginaAnterior()}>
          Previous
        </button>
        <div>
          <p className="page-counter">
            Page {pagina} of {info}
          </p>
        </div>
        <button className="boton" onClick={() => paginaSiguiente()}>
          Next
        </button>
      </div>
      <div>
        {arrayPersonajes.map((personaje) => (
          <Suspense fallback={Cargando}>
            <Personaje personaje={personaje} key={personaje.id}></Personaje>
          </Suspense>
        ))}
      </div>
      <div className="contenedor-end">
        <button className="boton" onClick={() => paginaAnterior()}>
          Previous
        </button>
        <p className="page-counter">
          Page {pagina} of {info}
        </p>
        <button className="boton" onClick={() => paginaSiguiente()}>
          Next
        </button>
      </div>
    </>
  );
};

export default Personajes;
