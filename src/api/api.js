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

export async function getDetailedCharacter(page){
    const result = await axios(`https://rickandmortyapi.com/api/character/${page}`);
    return(result.data);
}

export async function getCharacterSpecies(){
    let pageCounter = 1;
    let speciesArray = [];
    const result = await axios(`https://rickandmortyapi.com/api/character/`);
    const counterLimiter = result.data.info.count;
    while (pageCounter <= counterLimiter) {
        const objects = await axios(`https://rickandmortyapi.com/api/character/${pageCounter}`);
        speciesArray.push(objects.data.species);
        pageCounter++;
    }
    return (speciesArray);
}

/** Hacer un diccionario con todas las palabras. Index of para eliminar repetidos.
 * let miArreglo = [1, 2, 3, 4, 5, 2, 3, 4];

let arregloSinRepetidos = miArreglo.filter(function (
  elemento,
  indice,
  arreglo
) {
  return arreglo.indexOf(elemento) === indice;
});

console.log(arregloSinRepetidos); // [1, 2, 3, 4, 5]

Otra opción más bonita

let miArreglo = [1, 2, 3, 4, 5, 2, 3, 4];
let setSinRepetidos = new Set(miArreglo);
let arregloSinRepetidos = Array.from(setSinRepetidos);

console.log(arregloSinRepetidos); // [1, 2, 3, 4, 5]
 * 
 */
export async function speciesSorter(){
    let arraySpecies = await getCharacterSpecies();
    let setNotRepeated = new Set(arraySpecies);
    let arrayDictionary = Array.from(setNotRepeated);
    let arrayData = [];
    for (let index = 0; index < arrayDictionary.length; index++) {
        let tempObject = {
            species:arrayDictionary[index],
            count:0
        }
        arrayData.push(tempObject);
    }
    for (let index = 0; index < arraySpecies.length; index++) {
        for (let i = 0; i < arrayData.length; i++) {
            if (arraySpecies[index] === arrayData[i].species) {
                arrayData[i].count++;
            }
        }
    }
    return arrayData;
}