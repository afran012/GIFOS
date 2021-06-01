import {API_DETAILS} from '../configs/config.js';

const checkStatusAndParse = async (res) => {  
    if (!res.ok) {
      throw new Error(`Status code error: ${res.status}`);
    }  
    return res.json()
}

// funcion fetch asincrona
async function getApiInfo ( url ) {
    const response = await fetch( url )
    const data = await checkStatusAndParse( response );
    return data.data ;
}
  

const getGifTrend = async () => {
    let response = getApiInfo(`${API_DETAILS.API_URL}/trending/searches?api_key=${API_DETAILS.API_KEY}`);
    //console.log(response)
    return response || {};
}

const gifAutocomplete = async (q , limit , offset) => {
    let response = getApiInfo(`${API_DETAILS.API_URL}/gifs/search/tags?api_key=${API_DETAILS.API_KEY}&q=${q}&limit=${limit}&offset=${offset}`);
    return response || {};
}

const getGifSearch = async (q , limit , offset) => {
    let response = getApiInfo(`${API_DETAILS.API_URL}/gifs/search?api_key=${API_DETAILS.API_KEY}&q=${q}&limit=${limit}&offset=${offset}`);
    console.log(response)
    return response || {};
}


const createGif = async (formData) => {
    /*var formData = new FormData();
    formData.append('api_key' , api_key);
    formData.append('username' , username);
    formData.append('file' , file , `${fileName}`);
    formData.append('tags' , `${tags}`);*/
    try {
        console.log("formData creategif",formData.get("api_key"))
        console.log("formData creategif",formData.get("file"))
        await fetch(`https://upload.giphy.com/v1/gifs`, {
            method: 'POST' ,
            body: formData
    })
    .then(response => response.json())
    .then(response => console.log('Success:' , response));
    }
    catch (error){
        console.error(error);
    }
    //return response || {};
}

export {getGifTrend , gifAutocomplete , getGifSearch , createGif} ;