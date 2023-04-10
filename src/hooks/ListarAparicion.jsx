import React from 'react'
import { useEffect, useState } from 'react'
import { importarEpisodio } from '../data/apiConnection'

//Components
import Aparicion from '../components/Aparicion'

const ListarAparicion = ({episodio}) => {
  const [objeto, setObjeto] = useState();
    useEffect(() => {
        const ConsultarApi = async()=>{
            setObjeto(await importarEpisodio(episodio));
        }
        ConsultarApi();
    }, []);
  return (
    <>
      <div>
        <Aparicion objeto={objeto}></Aparicion>
      </div>
    </>
  )
}

export default ListarAparicion