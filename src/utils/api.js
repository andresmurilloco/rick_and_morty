import axios from "axios";

const apiCharacters = axios.create({
    baseUrl:'https://rickandmortyapi.com/api/character',
})

const apiEpisodes = axios.create({
    baseUrl:'https://rickandmortyapi.com/api/episode',
})

const apiLocations = axios.create({
    method:'get',
    baseURL:'https://rickandmortyapi.com/api/location',
})

export async function ImportarPersonaje(){
    apiCharacters.get('/').then(function (response){
        console.log(response);    
    });
}

export async function ImportarEpisodios(){
    apiEpisodes.get('/').then(function (response){
        const resultados = response.data.results;
        const arreglo = resultados.map(capitulo =>{
            const objeto={
                id : capitulo.id,
                titulo : capitulo.name,
            }
            return objeto;
        })
        console.log(arreglo);
        return(arreglo);
        });
}

export async function ImportarLugares(){
    apiLocations.get('/').then(function (response){
    const resultados = response.data.results;
    const arreglo = resultados.map(ubicacion =>{
        const objeto={
            id : ubicacion.id,
            titulo : ubicacion.name,
        }
        return objeto;
    })
    console.log(arreglo);
    return(arreglo);
    });
}