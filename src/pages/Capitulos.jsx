import React from 'react'
import { useEffect, useState } from 'react';

const Capitulos = () => {
  const [episodes, setEpisodes] = useState([])
    useEffect(() => {
        const consultarAPI = async()=>{
            const url= "https://rickandmortyapi.com/api/episode";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayEpisodes = resultado.results.map(episode =>{
            const objeto={
                id: episode.id,
                name: episode.name,
                air_date: episode.air_date,
                episodio: episode.episode,
                characters: episode.characters,
                link: episode.url,
                created: episode.created,
            }
            return objeto;
            } );
            setEpisodes(arrayEpisodes)
        }
        consultarAPI();
        },[]);

  return (
    <>
     <div className='ml-24 mt-5 mr-24'>
        <div>
          <h1 className=' text-green-700 font-bold text-3xl'>Episodes</h1>
        </div>
        <div className='bg-white'>
          <p>{episodes[1].name}</p>
        </div>
     </div>
    </>
  )
}

export default Capitulos