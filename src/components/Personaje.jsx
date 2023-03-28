/*
  ---------------- NOTAS DE DESARROLLO --------------------
  url y created será información solo para back. El usuario no requiere saber esta información.

  ---------------- PENDIENTES -----------------
  La lista de episodios devuelve un arreglo que al recorrerlo solo da los enlaces a los
  episodios, pero no extrae la info del episodio.

*/

import React from 'react'
import { useEffect, useState } from 'react';
import styled from '@emotion/styled'

const Parrafo = styled.p`
  margin-top: 5px;
  font-weight: bold;
`;

const Personaje = ({personaje}) => {
  const {id,name,status,species,type,gender,origin, location,image,episode,url,created }=personaje
  const [textState, setTextState] = useState("")

  useEffect(() => {
    if(status === "Alive"){
      setTextState(" text-green-800")
    } else if(status==="unknown"){
      setTextState(" text-gray-200")
    } else{
      setTextState(" text-red-700")
    }
  }, [])
  
  return (
    <>
        <div className='ml-24 mr-24 mt-5 mb-5 max-[850px]:ml-5 max-[850px]:mr-5'>
          <div className='rounded-md flex bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5 p-3'>
            <div className='w-1/2 bg-yellow-600 rounded-md p-5 text-center'>
              <div className='bg-yellow-300 rounded-md'>
                <h1 className='text-3xl font-bold font-gloria'>{name}</h1>
                <img src={image} className={'rounded-md mx-auto m-5'}/>
                <Parrafo>Status: <span className={textState}>{status}</span></Parrafo>
                <Parrafo>Species: <span>{species}</span></Parrafo>
                <Parrafo>{type}</Parrafo>
              </div>
            </div>
            <div className='w-1/2 text-center'>
              <h1 className='text-3xl font-bold font-gloria'>Appearances</h1><br />
              {episode.map((episodio,i)=>{
                  return(
                    <p>{episodio}</p>
                  )
              })}
          </div>
          </div>
          
        </div>
    </>
  )
}

export default Personaje