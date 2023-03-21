import React from 'react'
import { useEffect } from 'react';

const Capitulos = () => {
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
            console.log(objeto);
            return objeto;
            } );
            // setEpisodes(arrayEpisodes)
        }
        consultarAPI();
        },[]);

  return (
    <div>Capitulos</div>
  )
}

export default Capitulos