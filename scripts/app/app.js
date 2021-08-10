// Import

import {createContainerAutocomplete} from '../domain/autocomplete/autocomplete.js'
import {createTrendSection} from '../domain/trend/trend.js'
import {createSearchSection} from '../domain/gifcard/gifcard.js'
import {trendGifsSection} from '../domain/trend/trendSection.js'
import {darkMode} from '../domain/darkMode/darkMode.js'
import {closeMaximize} from '../domain/maximize/maximize.js'



/////// Trend 
await trendGifsSection();
createTrendSection(4 , 0);




const searchBtn = document.getElementById('search-btn')
const pInputSearch = document.getElementById('search-gif')
const limitSearch = 12
const offsetSearch = 0
const limitAutocomplete = 4
const offsetAutocomplete = 0
let flagAuto = 0
let currentSearch = 0
const viewMoreBtn = document.getElementById('search-more')
let inputSearchValue = ""





pInputSearch.addEventListener('input', async (event) => {
    //event.preventDefault()
    const autocomplete = await createContainerAutocomplete(pInputSearch.value, limitAutocomplete , offsetAutocomplete )
    console.log(autocomplete)
})



searchBtn.addEventListener('click', async (event) => {
    const gifsSearchSectios= document.getElementById('gifs-search-container');
    gifsSearchSectios.innerHTML = ""
    const  searchSection = await createSearchSection(pInputSearch.value, limitSearch , offsetSearch)
    console.log(searchSection)
    return inputSearchValue = pInputSearch.value
})


viewMoreBtn.addEventListener('click', async (event) => {
    currentSearch += 12
    const  searchSection = await createSearchSection(inputSearchValue, limitSearch, currentSearch)
    console.log(searchSection)
})
    