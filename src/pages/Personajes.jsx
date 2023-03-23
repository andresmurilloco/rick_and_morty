import React from 'react'
import { useState, useEffect } from 'react'

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
                }
                return objeto;
            })
            setArrayPersonajes(arregloPersonajes);
        }
        
        ConsultarApi();
    }, [])
    return (
        <div>Personajes</div>
    )
    }

export default Personajes