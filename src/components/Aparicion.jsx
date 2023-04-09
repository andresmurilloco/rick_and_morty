import React from 'react'
import { useEffect, useState } from 'react'
import { importarEpisodio } from '../data/apiConnection'
import { ImportarPersonaje } from '../utils/api';

const Aparicion = ({episodio}) => {
    const [objeto, setObjeto] = useState()
    useEffect(() => {
        const ConsultarApi = async()=>{
            setObjeto(await importarEpisodio(episodio));
        }
        ConsultarApi();
    }, [])
  return (
    <div>Aparicion</div>
  )
}

export default Aparicion