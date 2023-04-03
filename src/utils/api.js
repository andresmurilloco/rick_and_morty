//Check for Axios singleton
import axios from "axios";

export async function ImportarPersonaje(){
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    axios.get(baseUrl).then((response)=>{
        console.log(baseUrl);
    })
}