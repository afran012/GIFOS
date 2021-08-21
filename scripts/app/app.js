// Import
import {darkMode} from '../domain/darkMode/darkMode.js'
import {closeMaximize} from '../domain/maximize/maximize.js'


import {createContainerAutocomplete} from '../domain/autocomplete/autocomplete.js'
import {createTrendSection} from '../domain/trend/trend.js'
import {createSearchSection} from '../domain/gifcard/gifcard.js'
import {trendGifsSection} from '../domain/trend/trendSection.js'
import { $ } from "../utils/domUtils.js";
import { SEARCH_SECTION } from "../configs/config.js"

/////// Trend 
await trendGifsSection();
createTrendSection(4 , 0);
/////////////////  DOM  ///////////////////////////////////
const searchBtn = document.getElementById('search-btn')
const pInputSearch = document.getElementById('search-gif')
const viewMoreBtn = document.getElementById('search-more')

///////////////////////////////////////////////////////////


$("#img-close-search").on("click", (event)=>{
    $("#search-gif").htmlElement.value = ""
    $("#autoContain").htmlElement.innerHTML = ""
    $("#search-btn").htmlElement.style.display = 'inline'
    $("#img-close-search").htmlElement.style.display = 'none'
})


const searchGifs = async (value, limitSearch , offsetSearch) => {
    SEARCH_SECTION.currentSearch = 0
    $("#autoContain").htmlElement.innerHTML = ""
    $("#gifs-search-container").htmlElement.innerHTML = "" 
    await createSearchSection(value, limitSearch , offsetSearch)
    SEARCH_SECTION.inputSearchValue = value
    $("#search-gif").htmlElement.value = ""
}

pInputSearch.addEventListener('keypress', async e => {
    if(e.keyCode == 13) {
        $("#search-btn").htmlElement.style.display = 'inline'
        $("#img-close-search").htmlElement.style.display = 'none'
        e.preventDefault();
        await searchGifs(pInputSearch.value, SEARCH_SECTION.limitSearch , SEARCH_SECTION.offsetSearch)
    }
}) 

searchBtn.addEventListener('click', async (event) => {
    await searchGifs(pInputSearch.value, SEARCH_SECTION.limitSearch , SEARCH_SECTION.offsetSearch)
})


pInputSearch.addEventListener('input', async (event) => {
    await createContainerAutocomplete(pInputSearch.value, SEARCH_SECTION.limitAutocomplete , SEARCH_SECTION.offsetAutocomplete )
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    console.log( "vw" , vw )
    if ( vw > 500 & pInputSearch.value != "") {
        $("#search-btn").htmlElement.style.display = 'none'
        $("#img-close-search").htmlElement.style.display = 'inline'
    }
    if (pInputSearch.value == ""){
        $("#search-btn").htmlElement.style.display = 'inline'
        $("#img-close-search").htmlElement.style.display = 'none'        
    }


})



viewMoreBtn.addEventListener('click', async (event) => {
    SEARCH_SECTION.currentSearch += 12
    console.log( "currentSearch" , SEARCH_SECTION.currentSearch)
    const  searchSection = await createSearchSection(SEARCH_SECTION.inputSearchValue, SEARCH_SECTION.limitSearch, SEARCH_SECTION.currentSearch)
})

    