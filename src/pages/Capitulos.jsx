import React from 'react'
import { useEffect, useState } from 'react';
import { importarEpisodios } from '../data/apiConnection';

//Components
import Capitulo from '../components/Capitulo';

const Capitulos = () => {
  const [episodes, setEpisodes] = useState([])
    useEffect(() => {
        const consultarAPI = async()=>{
          setEpisodes(await importarEpisodios());
        }
        consultarAPI();
        },[]);

  return (
    <>
     <div className='ml-24 mt-5 mr-24'>
        <div>
          <h1 className=' text-green-700 font-bold text-3xl'>Episodes</h1>
        </div>
        <div>
          {episodes.map(episode =>(
                <Capitulo episode={episode} key={episode.id}/>
              ))}
        </div>
        <div>
        </div>
     </div>
    </>
  )
}

export default Capitulos