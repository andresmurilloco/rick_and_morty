export async function importarEpisodio(){
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