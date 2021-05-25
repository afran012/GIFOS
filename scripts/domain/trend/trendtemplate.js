const searchIn = document.getElementById("search-gif")
const pTrendData = document.getElementById('p-trend-id')

const initTrend = 0;
const endTrend = 5;
let flagTrend = 1   ;
let dotOrComma = ","

const trendTemplate = (tags) => {
    let trends = tags.slice(initTrend,endTrend);
    trends.forEach ( trend => {
        if (flagTrend == endTrend) {        
            dotOrComma = `.`;}
        let wordTrend = document.createElement('span');
        wordTrend.textContent = ` ${trend} ${dotOrComma}`;
        pTrendData.appendChild(wordTrend)        
        wordTrend.addEventListener('click' , ()=>{searchIn.value = trend})
        flagTrend += 1
        //console.log(flagTrend)
    })    
}

export {trendTemplate}
