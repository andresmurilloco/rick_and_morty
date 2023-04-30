import React, { useEffect } from "react";
import { useState, useReact } from "react";
import { importarEpisodio } from "../data/apiConnection";
import '../css/textSwitcher.css'

const Aparicion = ({ episodio}) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const ConsultarApi = async () => {
     const respuesta = await importarEpisodio(episodio);
     setId(respuesta.id);
     setName(respuesta.name);
     setUrl(respuesta.url);
    };
    ConsultarApi();
  }, []);
  
  return (
    <>
      <div className="font-gloria text-xl">
        <p>{name}</p>
      </div>
    </>
  );
};

export default Aparicion;
