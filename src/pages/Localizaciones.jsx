import React from 'react'
import { useState, useEffect } from 'react';
import {ImportarLugares} from '../utils/api'
import { importarLocalizaciones } from '../data/apiConnection';

//Components
import Localizacion from '../components/Localizacion';

const Localizaciones = () => {
  const [localizaciones, setLocalizaciones] = useState([]);

  useEffect(() => {
    const ConsultarApi=async()=>{
      setLocalizaciones(await importarLocalizaciones());
    }
    ConsultarApi();
  }, [])
  return (
    <>
      <div className='ml-24 mt-5 mr-24'>
        {localizaciones.map(localizacion=>(
          <Localizacion localizacion={localizacion} key={localizacion.id}></Localizacion>
        ))}
      </div>
    </>
  )
}

export default Localizaciones