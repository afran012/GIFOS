import {getGifTrend, gifAutocomplete} from './services/giftService.js'

const searchBtn = document.getElementById('search-btn')
const pInputSearch = document.getElementById('search-gif')
let limitSearch = 12
const offsetSearch = 12
const limitAutocomplete = 4
const offsetAutocomplete = 0





pInputSearch.addEventListener('keypress', async (event) => {
    //event.preventDefault()
    const autocomplete = await gifAutocomplete(pInputSearch.value, limitAutocomplete , offsetAutocomplete )
    console.log(autocomplete)
})

    