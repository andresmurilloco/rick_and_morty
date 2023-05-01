import React from 'react'
import { useState, useEffect } from 'react';
import '../css/containerSwitcher.css'
import LocalizacionAparicion from './LocalizacionAparicion';
import { redirect } from 'react-router-dom';

const Localizacion = ({localizacion}) => {
  const {id,name,type,dimension,residents,url} = localizacion;
  const [divState, setDivState] = useState(false)
  const [residentState, setResidentState] = useState(false)
  const [botonEstado, setBotonEstado] = useState(false);

  const mostrarBoton=()=>{
    if(residents.length>4){
      setBotonEstado(true);
    }
  }

  useEffect(() => {
    mostrarBoton();
  }, [])

  const switcher=()=>{
    setDivState(!divState);
  }

  const buttonAparicionesHandler=()=>{
    setBotonEstado(!botonEstado);
    setResidentState(!residentState);
    console.log(residentState);
  }

  return (
    <>
      <div className='rounded-md bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5' onClick={()=>{switcher()}}>
        <h1 className='text-3xl font-bold font-gloria'>{name}</h1>
      </div>
      {divState?
      <div className='bg-[#41714A] rounded-md'>
        <div className={'show-localizacion'}>
          <div className='w-1/3 flex-col font-gloria text-center rounded-md bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-2 pt-64'>
            <h1 className='text-3xl font-bold'>Location details</h1> <br />
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
          </div>
          <div className={residentState ? 'show-residents':'compact-residents'}>
            {residents.map(resident=>{
              return(
                <LocalizacionAparicion character={resident}></LocalizacionAparicion>
              )
            })}
          </div>
        </div>
        <button onClick={()=>buttonAparicionesHandler()} className='underline font-gloria justify-end ml-[90%] mb-3'>{residentState ? 'Show less' : 'Show more'}</button>
      </div>
      :''}
    </>
  )
}

export default Localizacion