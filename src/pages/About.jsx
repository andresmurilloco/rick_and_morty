import React from 'react'
import { useEffect } from 'react'
import { ImportarEpisodios, ImportarPersonaje } from '../utils/api.js'

const About = () => {
  useEffect(() => {
    fetchApi();
  }, [])
  const fetchApi =async()=>{
    const algo = await ImportarPersonaje()
    const lugar = await ImportarEpisodios()
    console.log(algo);
    console.log(lugar);
  }
  return (
    <>
        <div className=' bg-white'>
            <h1>ABOUT</h1>
        </div>
    </>
  )
}

export default About