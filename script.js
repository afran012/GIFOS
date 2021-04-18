// TODO 1 Move this strings to another script and import them as global variables
console.log('inicializando')
const apiKey='VGMet3jkVt6odgACtHxZOolIHWxqwLZs';
const urlTrend = 'http://api.giphy.com/v1/trending/searches';
const completeUrl = `${urlTrend}?api_key=${apiKey}`;
console.log(completeUrl)


let trendArray = []
let trendSearch = fetch(completeUrl).then(response => response.json());
let trendsStr = ''
let pTrendData = document.getElementById('p-trend-id')
let inputSearch = document.getElementById('search-gif');
const initTrend = 0;
const endTrend = 5;
let flagTrend = 0;

// Searh trending words.

trendSearch.then(trendsDict => {

    let trendData = trendsDict.data.slice(initTrend,endTrend);
    console.log(`trendData ${trendData}`);
    trendData.forEach(trend => {
        flagTrend +=1 ;
        trendsStr += `${trend}, `;
        trendArray.push(trend)
        wordsTrend = fillTrendP(trend, flagTrend)
    })
    console.log(`trendArray ${trendArray}`);
    //pTrendData.innerHTML = wordsTrend
} ).catch(error => console.log(error))

// Fill the tp-trend

function fillTrendP(arraydTrend,positionTrend){
    console.log(arraydTrend)
    console.log(positionTrend)
    let wordTrend = document.createElement('p');
    wordTrend.textContent = `${arraydTrend}`;
    pTrendData.appendChild(wordTrend)
    wordTrend.addEventListener('click', ()=>(inputSearch.value = `${arraydTrend}`))

    
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




