import React from 'react'
import { useState } from 'react';
import '../css/containerSwitcher.css'
import LocalizacionAparicion from './LocalizacionAparicion';

const Localizacion = ({localizacion}) => {
  const {id,name,type,dimension,residents,url} = localizacion;
  const [divState, setDivState] = useState(false)
  const [residentState, setResidentState] = useState('compact-resident')

  const switcher=()=>{
    setDivState(!divState);
  }

  return (
    <>
      <div className='rounded-md bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5' onClick={()=>{switcher()}}>
        <h1 className='text-3xl font-bold font-gloria'>{name}</h1>
      </div>
      {divState?
        <div className={'show-localizacion'}>
          <div className='w-1/3 flex-col font-gloria text-center rounded-md bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-2 pt-64'>
            <h1 className='text-3xl font-bold'>Location details</h1> <br />
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
          </div>
          <div className='w-2/3 flex flex-wrap text-center'>
            
            {residents.map(resident=>{
              return(
                <LocalizacionAparicion character={resident}></LocalizacionAparicion>
              )
            })}
            
          </div>
        </div>
      :''}
    </>
  )
}

export default Localizacion