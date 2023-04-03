import React from 'react'
import { useState, useEffect } from 'react'
import { importarPersonaje } from '../data/apiConnection';

//Componentes
import Personaje from '../components/Personaje';

const Personajes = () => {
    const [arrayPersonajes, setArrayPersonajes] = useState([]);
    useEffect(() => {
        const ConsultarApi=async()=>{
            setArrayPersonajes(await importarPersonaje());
        }
        ConsultarApi();
    }, [])
    return (
        <>
        <div>
            {arrayPersonajes.map(personaje=>(
                <Personaje personaje={personaje} key={personaje.id}></Personaje>
            ))}
        </div>
        </>
    )
    }

export default Personajes