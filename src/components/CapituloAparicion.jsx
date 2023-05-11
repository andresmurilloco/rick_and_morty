import React from 'react'
import { useEffect, useState, Suspense } from 'react'
import { getCharacterApi } from '../api/api'
import { Link } from 'react-router-dom'

import Detallado from '../pages/Detallado'
import Cargando from './Cargando'

const CapituloAparicion = ({key, character}) => {
  const [personaje, setPersonaje] = useState({})
  useEffect(() => {
    const connectApi = async()=>{
      setPersonaje(await getCharacterApi(character))
    }
    connectApi();
  }, [])

  const {id, name, image, url} = personaje;  

  return (
    <>
      <div className='' key={id}>
        <Link to={`/detailed/${id}`}>
          <Suspense fallback={Cargando}>
            <img src={image} alt="" srcset="" className='rounded-md border-2 border-yellow-500'/>
          </Suspense>
          <h1 className='font-gloria text-xl mb-5 text-center'>{name}</h1>
        </Link>
      </div>
    </>
  )
}

export default CapituloAparicion