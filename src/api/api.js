import axios from "axios";

export async function getCharacterApi(page){
    const characterInfo = await axios(page);
    return(characterInfo.data);
}

export async function getEpisodes(page){
    const objeto = await axios(`https://rickandmortyapi.com/api/episode/?page=${page}`)
    return(objeto.data.results);
}

export async function getEpisodesInfo(){
    const result = await axios(`https://rickandmortyapi.com/api/episode/`)
    return(result.data.info.pages);
}

export async function getLocationsInfo(){
    const result = await axios(`https://rickandmortyapi.com/api/location/`)
    return(result.data.info.pages);
}

export async function getLocations(page){
    const result = await axios(`https://rickandmortyapi.com/api/location/?page=${page}`)
    return(result.data.results);
}