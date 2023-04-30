import React from 'react'
import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import { Link, Routes, Route, useParams } from "react-router-dom";

//Hooks
import ListarAparicion from './ListarAparicion';
import Detallado from '../pages/Detallado';

const Parrafo = styled.p`
  margin-top: 5px;
  font-weight: bold;
`;

const Personaje = ({personaje}) => {
  const {id,name,status,species,type,gender,origin, location,image,episode,url,created }=personaje
  const [textState, setTextState] = useState("")
  const [estadoTexto, setEstadoTexto] = useState(false)
  const [mostrarBoton, setMostrarBoton] = useState(true)
  const numeroEpisodios = Object.getOwnPropertyNames(episode).length;

  useEffect(() => {
    if(status === "Alive"){
      setTextState(" text-green-800")
    } else if(status==="unknown"){
      setTextState(" text-gray-200")
    } else{
      setTextState(" text-red-700")
    }
    configurarBoton();
  }, [])

  const configurarBoton=()=>{
    if (numeroEpisodios<14) {
      setMostrarBoton(false);
    }
  }
  
  return (
    <>
      <div className='ml-24 mr-24 mt-5 mb-5 max-[850px]:ml-5 max-[850px]:mr-5'>
        <div className='rounded-md flex bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5 p-3'>
          <div className='w-1/2 bg-yellow-600 rounded-md p-5 text-center'>
          <Link to={`/detailed/${id}`}>
              <div className='bg-yellow-300 rounded-md'>
                <h1 className='text-3xl font-bold font-gloria' key={id}>{name}</h1>
                <img src={image} className={'rounded-md mx-auto m-5'}/>
                <Parrafo>Status: <span className={textState}>{status}</span></Parrafo>
                <Parrafo>Species: <span>{species}</span></Parrafo>
                <Parrafo>{type}</Parrafo>
              </div>
            </Link>
          </div>
          <div className='w-1/2 text-center'>
            <h1 className='text-3xl font-bold font-gloria'>Appearances</h1><br/>
            <div className={estadoTexto ? '':'ocultarAparicion'}>
              {episode.map((episodio,i)=>{
                  return(
                    <ListarAparicion episodio={episodio}></ListarAparicion>
                  )
              })}
            </div>
            {mostrarBoton ? <button className='underline font-gloria' onClick={()=>{setEstadoTexto(!estadoTexto)}}>{estadoTexto ? 'Show less':'Show more'}</button>:''}
        </div>
        </div>
      </div>
    </>
  )
}

export default Personaje