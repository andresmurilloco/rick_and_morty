import React from 'react'
import { useState, useEffect } from 'react'

//Componentes
import Personaje from '../components/Personaje';

const Personajes = () => {
    const [arrayPersonajes, setArrayPersonajes] = useState([]);
    useEffect(() => {
        const ConsultarApi=async()=>{
            const url = 'https://rickandmortyapi.com/api/character';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arregloPersonajes= resultado.results.map(personaje=>{
                const objeto={
                    id:personaje.id,
                    name: personaje.name,
                    status: personaje.status,
                    species: personaje.species,                    
                    type: personaje.type,
                    gender: personaje.gender,
                    origin: personaje.origin,
                    location: personaje.location,
                    image: personaje.image,
                    episode: personaje.episode,
                    url: personaje.url,
                    created: personaje.created,
                }
                return objeto;
            })
            setArrayPersonajes(arregloPersonajes);
        }
        ConsultarApi();
    }, [])
    return (
        <>
        <div>
            <Personaje personaje={arrayPersonajes}></Personaje>
        </div>
        </>
    )
    }

export default Personajes