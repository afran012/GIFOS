// TODO 1 Move this strings to another script and import them as global variables

//variable for trendin p
console.log('inicializando')
const apiKey='VGMet3jkVt6odgACtHxZOolIHWxqwLZs';
const urlTrend = 'http://api.giphy.com/v1/trending/searches';
const completeUrlTrend = `${urlTrend}?api_key=${apiKey}`;
//console.log(completeUrlTrend)




let trendArray = []
let trendSearch = fetch(completeUrlTrend).then(response => response.json());
let trendsStr = ''
let pTrendData = document.getElementById('p-trend-id')
let pInputSearch = document.getElementById('search-gif');
const initTrend = 0;
const endTrend = 5;
let flagTrend = 0;

// Searh trending words.

trendSearch.then(trendsDict => {

    let trendData = trendsDict.data.slice(initTrend,endTrend);
    //console.log(`trendData ${trendData}`);
    trendData.forEach(trend => {
        flagTrend +=1 ;
        trendsStr += `${trend}, `;
        trendArray.push(trend)
        wordsTrend = fillTrendP(trend, flagTrend)
    })
    //console.log(`trendArray ${trendArray}`);
    //pTrendData.innerHTML = wordsTrend
} ).catch(error => console.log(error))

// Fill the tp-trend and add event with click

function fillTrendP(arraydTrend, positionTrend){
    //console.log(arraydTrend)
    //console.log(positionTrend)
    let wordTrend = document.createElement('p');
    wordTrend.textContent = `${arraydTrend}`;
    pTrendData.appendChild(wordTrend)
    wordTrend.addEventListener('click', ()=>(pInputSearch.value = `${arraydTrend}`))

    
    // if (positionTrend < endTrend){
    //     commaTrend = document.createElement('p')
    //     commaTrend.textContent = `, `;
    //     pTrendData.appendChild(commaTrend)
    // }
    // else{
    //     dottTrend = document.createElement('p')
    //     dottTrend.textContent = `.`;
    //     pTrendData.appendChild(dottTrend)
    // }

}



// variable for shearch input

let qSearch='redneck' ;
const urlSeachr = 'http://api.giphy.com/v1/gifs/search';
const apiKey2='wMNYd9HLbk381KEcexeKv49ueStRnHW0';
const limitSearch = 12;
const offsetSearch = 0;

const completeUrlSearch = `${urlSeachr}?api_key=${apiKey}`;

const testSearch = `${completeUrlSearch}&q=${qSearch}&limit=${limitSearch}&offset=${offsetSearch}`;
console.log(testSearch)


 let inputSearch = fetch(`${completeUrlSearch}&q=${qSearch}&limit=${limitSearch}&offset=${offsetSearch}`).then(response => response.json());
// console.log(inputSearch)

inputSearch.then(inSearchDict => {

    let searchData = inSearchDict.data;
    console.log(`searchData ${searchData}`);
    let elementData = searchData[0];
    console.log(`elementData ${elementData}`);
    trendData.forEach(trend => {
        flagTrend +=1 ;
        trendsStr += `${trend}, `;
        trendArray.push(trend)
        wordsTrend = fillTrendP(trend, flagTrend)
    })
    //console.log(`trendArray ${trendArray}`);
    //pTrendData.innerHTML = wordsTrend
} ).catch(error => console.log(error))


//The class is created to store the data obtained by the promise






//create a Trend section

const trendGifos = document.querySelector(".div-gifo");
const destTrendGif = document.querySelector(".div-trend-gif");

function clonar(elementToClone,destiny,className){
    let clon = elementToClone.cloneNode(true);
    let cloneElement = destiny.appendChild(clon);
    console.log('clone')
    console.log(className)
    cloneElement.classList.add(className)
}

for (let i = 1; i < 12; i++) {
    clonar(trendGifos,destTrendGif,`trend_gif_container${i}`)
} 
trendGifos.classList.add('trend_gif_container0')
console.log(document.querySelector("div.div-gifo"))

function searchGif(){

}




