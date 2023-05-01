import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCharacterApi } from '../api/api'

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
    <div className='p-2'>
      <Link to={`/detailed/${id}`}>
          <img src={image} alt="" srcset="" className='rounded-md border-2 border-yellow-500'/>
          <h1 className='font-gloria text-xl mb-5 text-center'>{name}</h1>
        </Link>
    </div>
  )
}

export default CapituloAparicion