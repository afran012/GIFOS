const CONSTCONFIG_DEV = {
    //variable for trendin p
    
    
    
    apiKey : 'VGMet3jkVt6odgACtHxZOolIHWxqwLZs',
    urlTrend : 'http://api.giphy.com/v1/trending/searches',
    completeUrlTrend : `http://api.giphy.com/v1/trending/searches?api_key=VGMet3jkVt6odgACtHxZOolIHWxqwLZs`,

    pTrendData : document.getElementById('p-trend-id'),
    pInputSearch : document.getElementById('search-gif'),

    // variable for shearch input

    completeUrlSearch : `http://api.giphy.com/v1/gifs/search?api_key=VGMet3jkVt6odgACtHxZOolIHWxqwLZs`




}


let VARCONFIG_DEV = {
    //variable for trendin p
    trendArray : [],
    trendsStr : '',
    initTrend : 0,
    endTrend : 5,
    flagTrend : 0,

    // variable for shearch input

    completeUrlSearch : `http://api.giphy.com/v1/gifs/search?api_key=VGMet3jkVt6odgACtHxZOolIHWxqwLZs`

}

export { CONSTCONFIG_DEV , VARCONFIG_DEV};