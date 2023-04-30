import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

//API
import { getDetailedCharacter } from '../api/api'

const Detallado = () => {
  const params= useParams();
  console.log(params);

  const [dataPersonaje, setDataPersonaje] = useState({})
    
    useEffect(() => {
        const getApi=async()=>{
            setDataPersonaje(await getDetailedCharacter(params.id));
        }
        getApi()
    }, []);
 
    return (
      <>
      <div className='ml-24 mr-24 mt-5 mb-5 max-[850px]:ml-5 max-[850px]:mr-5 font-gloria'>
        <div className='rounded-md bg-green-400 border-yellow-500 border-4 shadow-md p-2 shadow-orange-300 mt-5'>
          <div className='w-1/2 bg-yellow-600 rounded-md p-5 text-center ml-[25%]'>
            <div className='bg-yellow-300 rounded-md'>
              <h1 className='text-2xl font-bold mb-[-15px]'>{dataPersonaje?.name}</h1>
              <img src={dataPersonaje?.image} className={'rounded-md mx-auto m-5'}/>
              <p>Name: <span className='font-bold'>{dataPersonaje?.name}</span></p>
              <p>Created on <span className='font-bold'>{dataPersonaje?.created}</span></p>
              <p>Gender: <span className='font-bold'>{dataPersonaje?.gender}</span></p>
              <p>Status: <span className='font-bold'>{dataPersonaje?.status}</span></p>
              <p>Species: <span className='font-bold'>{dataPersonaje?.species}</span></p>
              <p><span className='font-bold'>{dataPersonaje?.type}</span></p>
            </div>
          </div>
          <Link to={'/characters'}>
            <button className='bg-green-800 rounded-md w-24 h-10 hover:bg-green-500'>Volver</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Detallado