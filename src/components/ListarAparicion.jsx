import React from 'react'
import { useEffect, useState } from 'react'
import { importarEpisodio } from '../data/apiConnection'

//Components
import Aparicion from './Aparicion'

const ListarAparicion = ({episodio}) => {
  
  return (
    <>
      <div>
        <Aparicion episodio = {episodio}></Aparicion>
      </div>
    </>
  )
}

export default ListarAparicion