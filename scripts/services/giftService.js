import {API_DETAILS} from '../configs/config.js';

const checkStatusAndParse = async (res) => {  
    if (!res.ok) {
      throw new Error(`Status code error: ${res.status}`);
    }  
    return res.json()
}

// funcion fetch asincrona
async function getApiInfo(url){
    const response = await fetch(url)
    const data = await checkStatusAndParse(response);
    return data.data ;
}
  

const getGifTrend = async () => {
    let response = getApiInfo(`${API_DETAILS.API_URL}/trending/searches?api_key=${API_DETAILS.API_KEY}`);
    //console.log(response)
    return response || {};
}

const gifAutocomplete = async (q, limit, offset) => {
    let response = getApiInfo(`${API_DETAILS.API_URL}/gifs/search/tags?api_key=${API_DETAILS.API_KEY}&q=${q}&limit=${limit}&offset=${offset}`);
    return response || {};
}





export {getGifTrend, gifAutocomplete};