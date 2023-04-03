export async function importarPersonaje(){
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
    return (arregloPersonajes);
}
//Axios
export async function importarEpisodios(){
        const url= "https://rickandmortyapi.com/api/episode";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        const arrayEpisodes = resultado.results.map(episode =>{
        const objeto={
            id: episode.id,
            name: episode.name,
            air_date: episode.air_date,
            episodio: episode.episode,
            characters: episode.characters,
            link: episode.url,
            created: episode.created,
        }
        return objeto;
        } );
        return(arrayEpisodes);        
}

//Esta función extrae solo la info necesaria para la lista de apariciones en episode.
export async function importarEpisodio(episodio){
    const url= episodio;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    return resultado;
}