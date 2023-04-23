import React from 'react'
import { useState } from 'react';
import '../css/containerSwitcher.css'
import LocalizacionAparicion from './LocalizacionAparicion';

const Localizacion = ({localizacion}) => {
  const {id,name,type,dimension,residents,url} = localizacion;
  const [divState, setDivState] = useState('show-localizacion')

  return (
    <>
      <div className='rounded-md bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5'>
        <h1 className='text-3xl font-bold font-gloria'>{name}</h1>
      </div>
      <div className={divState}>
        <div className='w-1/3 flex-col text-center'>
          <h1 className='text-xl font-gloria'>{name}</h1>
          <p>{type}</p>
          <p>{dimension}</p>
        </div>
        <div className='w-2/3 flex flex-wrap text-center'>
          {residents.map(resident=>{
            return(
              <LocalizacionAparicion character={resident}></LocalizacionAparicion>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Localizacion