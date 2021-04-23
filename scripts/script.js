// TODO 1 Move this strings to another script and import them as global variables


//variable for trendin p
console.log('inicializando')
const apiKey='VGMet3jkVt6odgACtHxZOolIHWxqwLZs';
const urlTrend = 'http://api.giphy.com/v1/trending/searches';
const completeUrlTrend = `${urlTrend}?api_key=${apiKey}`;
console.log(completeUrlTrend)


let trendArray = []



let trendSearch = fetch(completeUrlTrend).then(response => response.json());

let trendsStr = ''
let pTrendData = document.getElementById('p-trend-id')
let pInputSearch = document.getElementById('search-gif');
const initTrend = 0;
const endTrend = 5;
let flagTrend = 0;
console.log(trendSearch);
// Searh trending words.

trendSearch.then(trendsDict => {

    let trendData = trendsDict.data.slice(initTrend,endTrend);
    console.log(`trendData ${trendData}`);
    trendData.forEach(trend => {
        flagTrend +=1 ;
        trendsStr += `${trend}, `;
        trendArray.push(trend)
        let wordsTrend = fillTrendP(trend, flagTrend)
        console.log(`wordsTrend eeeee ${wordsTrend}`);
    })
    console.log(`trendArray ${trendArray}`);
    //pTrendData.innerHTML = wordsTrend
} ).catch(error => console.log(error))

// Fill the tp-trend and add event with click

//Variables

let dotOrComma = ', ';

function fillTrendP(arraydTrend, positionTrend){

    console.log(`arraydTrend ${arraydTrend}`);
    console.log(`positionTrend ${positionTrend}`);

    if (positionTrend == endTrend){        
        dotOrComma = `.`;
    }
    let wordTrend = document.createElement('span');
    wordTrend.textContent = ` ${arraydTrend}${dotOrComma} `;
    pTrendData.appendChild(wordTrend)
    wordTrend.addEventListener('click', ()=>(pInputSearch.value = `${arraydTrend}`))
    return 
}


// variable for shearch input


//let qSearch='redneck' ;
const urlSeachr = 'http://api.giphy.com/v1/gifs/search';
const apiKey2='wMNYd9HLbk381KEcexeKv49ueStRnHW0';
let limitSearch = 12;
const offsetSearch = 12;

const completeUrlSearch = `${urlSeachr}?api_key=${apiKey}`;

//const testSearch = `${completeUrlSearch}&q=${qSearch}&limit=${limitSearch}&offset=${offsetSearch}`;+
//console.log(testSearch)


// searchBtn function
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', ()=>(clickSearchBtn()))

let flagSearch = 0;
let sectionSearch;
let gifsSearchSectios= document.getElementById('gifs-search-section');

function clickSearchBtn(){
    console.log('click')
    let qSearch = pInputSearch.value
    let inputSearch = fetch(`${completeUrlSearch}&q=${qSearch}&limit=${limitSearch}&offset=${offsetSearch}`).then(response => response.json());
// console.log(inputSearch)

    let sectionSearch = document.createElement("div")
    sectionSearch.classList.add("gifs-search-section")
    

    inputSearch.then(inSearchDict => {

        let searchData = inSearchDict.data;
        console.log(`searchData ${searchData}`);
        gifsSearchSectios.appendChild(sectionSearch)
    
        searchData.forEach(gif => {
            let gifUrl = gif.images.fixed_height_still.url;        
            let cardGif = createCard(gifUrl)
            sectionSearch.appendChild(cardGif)
            //console.log(gifUrl)
        })
        
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

/*
class MainGif {
    constructor(nameGif, urlGif, positionGif ,sizeGif){
        this.nameGif = nameGif;
        this.urlGif = urlGif;
        this.positionGif = positionGif;
        this.positionGif = sizeGif;
     }
     createCard(){
        let card = document.createElement("div")
        card.classList.add("div-gifo")
        gifsSearchSectios.appendChild(card)
        let imgGif = document.createElement("img")
        imgGif.src = this.urlGif;
        imgGif.setAttribute("alt", "gif item");
        imgGif.classList.add("img-gif")



        let icons = document.createElement("div")
        icons.classList.add("div-icons-gifo")
        gifsSearchSectios.appendChild(icons)

     }
 }*/


//create a Trend section


const trendGifos = document.querySelector(".div-gifo");
const destTrendGif = document.querySelector(".div-trend-gif");

function clonar(elementToClone,destiny,className){
    let clon = elementToClone.cloneNode(true);
    let cloneElement = destiny.appendChild(clon);
    // console.log('clone')
    // console.log(className)
    cloneElement.classList.add(className)
}

for (let i = 1; i < 12; i++) {
    clonar(trendGifos,destTrendGif,`trend_gif_container${i}`)
} 
trendGifos.classList.add('trend_gif_container0')
console.log(document.querySelector("div.div-gifo"))
