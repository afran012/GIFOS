import * as GifService from "../services/giftService.js";

import * as gifTemplate from "../domain/giftcardtemplate";

const createGiftContainer = async (tag , limit , offset) => {

    try {
        const giftData = await GifService.getGifTrend(tag,limit,offset)
    }

    //return await gifTempleate.
    catch (error) {
        console.error(error);
    }

}


// searchBtn function
const urlSeachr = 'http://api.giphy.com/v1/gifs/search';
const apiKey2='wMNYd9HLbk381KEcexeKv49ueStRnHW0';
let limitSearch = 12;
const offsetSearch = 12;
const completeUrlSearch = `${urlSeachr}?api_key=${CONSTCONFIG_DEV.apiKey}`;
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', ()=>(clickSearchBtn()))
let flagSearch = 0;
let gifsSearchSections= document.getElementById('gifs-search-section');

function clickSearchBtn(){


  console.log('click')
  let qSearch = CONSTCONFIG_DEV.pInputSearch.value
  let inputSearch = getGifInfo(`${completeUrlSearch}&q=${qSearch}&limit=${limitSearch}&offset=${offsetSearch}`);
  console.log(`${completeUrlSearch}&q=${qSearch}&limit=${limitSearch}&offset=${offsetSearch}`)
  console.log(`inputSearch ${inputSearch}`)
}

let searchSection = CONSTCONFIG_DEV.sectionSearch
inputSearch.then(inSearchDict => {

  console.log(`inSearchDict ${inSearchDict}`);
  inSearchDict.forEach(gif => {
    console.log(`gif ${gif}`);
    let gifUrl = gif.images.fixed_height_still.url;        
    let cardGif = createCard(gifUrl)
    CONSTCONFIG_DEV.sectionSearch.appendChild(cardGif)
    //console.log(gifUrl)
  })

gifsSearchSections.appendChild(searchSection)
searchSection.classList.add("gifs-search-section")
console.log(gifsSearchSections)
      
} ).catch(error => console.log(error))

  
