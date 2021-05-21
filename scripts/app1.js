import {createContainerAutocomplete} from './domain/autocomplete.js'
import {createTrendSection} from './domain/trend.js'

createTrendSection(4 , 0);


const searchBtn = document.getElementById('search-btn')
const pInputSearch = document.getElementById('search-gif')
let limitSearch = 12
const offsetSearch = 12
const limitAutocomplete = 4
const offsetAutocomplete = 0
let flagAuto = 0





pInputSearch.addEventListener('input', async (event) => {
    //event.preventDefault()
    const autocomplete = await createContainerAutocomplete(pInputSearch.value, limitAutocomplete , offsetAutocomplete )
    console.log(autocomplete)
})

    