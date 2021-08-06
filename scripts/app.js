import { CONSTCONFIG_DEV , VARCONFIG_DEV} from './config.js';

//Verifica error o retorna datos
const checkStatusAndParse = async (res) => {  
  if (!res.ok) {
    throw new Error(`Status code error: ${res.status}`);
  }  
    return res.json()
  };


// funcion fetch asincrona
async function getGifInfo(url){
  const gifRes = await fetch(url)
  const gifData = await checkStatusAndParse(gifRes);
  return gifData.data ;
}

// Luego de llamar a la funcion asyncrona para el trend

let trend = getGifInfo(CONSTCONFIG_DEV.completeUrlTrend)
trend.then(trendData => {
  //console.log(trendData)
  let trend = trendData.slice(VARCONFIG_DEV.initTrend,VARCONFIG_DEV.endTrend);
  let flagTrend = 0;
  trend.forEach(trend => {
    flagTrend +=1 ;
    VARCONFIG_DEV.trendsStr += `${trend}, `;
    VARCONFIG_DEV.trendArray.push(trend)
    let wordsTrend = fillTrendP(trend, flagTrend)
    //console.log(`wordsTrend eeeee ${wordsTrend}`);
})
}).catch(error => console.log(error))

// funcion para llenar el p de trend

function fillTrendP(arraydTrend, positionTrend){

  //console.log(`arraydTrend ${arraydTrend}`);
  //console.log(`positionTrend ${positionTrend}`);

  if (positionTrend == VARCONFIG_DEV.endTrend){        
    VARCONFIG_DEV.dotOrComma = `.`;
  }
  let wordTrend = document.createElement('span');
  wordTrend.textContent = ` ${arraydTrend}${VARCONFIG_DEV.dotOrComma} `;
  CONSTCONFIG_DEV.pTrendData.appendChild(wordTrend)
  wordTrend.addEventListener('click', ()=>(CONSTCONFIG_DEV.pInputSearch.value = `${arraydTrend}`))
  return 
}

CONSTCONFIG_DEV.searchBtn.addEventListener('click', ()=>(clickSearchBtn()))



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
/*
  let sectionSearch = document.createElement("div")
  sectionSearch.classList.add("gifs-search-section")
  */
  
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

    
}
/*
if (flagSearch==0){
    flagSearch +=1;
}
else{
    flagSearch = 0;
    //gifsSearchSectios.removeChild(sectionSearch)
    //sectionSearch.removeChild(gifsSearchSectios)
}
*/






//The class is created to store the data obtained by the promise
//Funcion para crear el contendor del gifo
function createCard(urlGif){
    
    let card = document.createElement("div")
    card.classList.add("div-gifo")  

    let imgGif = document.createElement("img")
    imgGif.src = urlGif;
    imgGif.setAttribute("alt", "gif-item");
    imgGif.classList.add("img-gif")
    

    let  icons= document.createElement("div")
    icons.classList.add("div-icons-gifo")

    let imgFav = document.createElement("img")
    imgFav.src = "./assets/images/icon-fav.svg";
    imgFav.setAttribute("alt", "icon-fav");
    imgFav.classList.add("img-fav")
    

    let imgDown = document.createElement("img")
    imgDown.src = "./assets/images/icon-download.svg";
    imgDown.setAttribute("alt", "icon-download");
    imgDown.classList.add("icon-download")
    

    let imgFull = document.createElement("img")
    imgFull.src = "./assets/images/icon-max-normal.svg"
    imgFull.setAttribute("alt", "icon-max-normal");
    imgFull.classList.add("icon-max-normal")
    


    card.appendChild(imgGif)  
    icons.appendChild(imgFav)  
    icons.appendChild(imgDown)
    icons.appendChild(imgFull)
    card.appendChild(icons)
    //console.log(card)
    return card
}




// Funcion para la barra de busqueda.


