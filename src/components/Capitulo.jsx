import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import '../css/containerSwitcher.css';

//Hooks
import CapituloAparicion from './CapituloAparicion';

const Capitulo = ({episodio}) => {
    const {id, name,air_date,episode,characters,link,created} = episodio;
    const [divStatus, setDivStatus] = useState('hidden');

    const switchDivStatus=()=>{
      if(divStatus === 'hidden'){
        setDivStatus('show');
      } else{
        setDivStatus('hidden');
      }
    }

  return (
    <>
      <div className='rounded-md bg-green-400 border-yellow-500 border-4 shadow-md shadow-orange-300 mt-5' onClick={()=>{switchDivStatus()}}>
        <h1 className='text-3xl font-bold font-gloria cursor-pointer' key={id}>{episode} - {name}</h1>
      </div>
      <div className={divStatus}>
        {characters.map(character=>{
          return(
            <div>
              <CapituloAparicion key={id} character={character}></CapituloAparicion>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Capitulo