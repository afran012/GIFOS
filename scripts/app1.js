import {createContainerAutocomplete} from './domain/autocomplete/autocomplete.js'
import {createTrendSection} from './domain/trend/trend.js'
import {createSearchSection} from './domain/gifcard/gifcard.js'





/*



let favorite2 = {gifId:"1231ds23dfs", urlFull: "22222222222"}
let favorite3 = {gifId:"123asdf123dfs", urlFull: "333333333333333333"}
let favorite4 = {gifId:"123asdf123dfs", urlFull: "444444444444444444"}

let favoriteLocalStorage = [favorite2,favorite3,favorite4]
//let gifLocalStorage = window.localStorage;
let favorites = "favorites"
localStorage.setItem( favorites , JSON.stringify(favoriteLocalStorage))
let favoritesLocal = JSON.parse(localStorage.getItem(favorites))
let favorite1 = {gifId:"123123dfs", urlFull: "1111111111111111111111"}
console.log("favoritesLocal ", favoritesLocal)
console.log("typefavoritesLocal ", typeof(favoritesLocal))
favoritesLocal.push(favorite1)
console.log("favoritesLocal ", favoritesLocal)
console.log("typefavoritesLocal ", typeof(favoritesLocal))
////// create video const TODO
localStorage.setItem( favorites , JSON.stringify(favoritesLocal) )
favoritesLocal = JSON.parse(localStorage.getItem(favorites))
console.log("favoritesLocal" , favoritesLocal)
//const found = favoritesLocal.gifId.find(id => id == "123123dfs")

let favorite5 = {gifId:"1231ds23dfs", urlFull: "55555555555555555555555"}

const fillFavGifById = (gifos, gif) =>{
    let found = gifos.find( (gifo) => gifo.gifId === gif.gifId);
    console.log( "found" , found )
    if ( !found ) {
        gifos.push(gif)
    }
    else {
        gifos.pop( (gifo) => gifo.gifId === gif.id)     
    }
    localStorage.setItem( favorites , JSON.stringify(gifos))      
}

let favById = fillFavGifById( favoritesLocal, favorite5 )
//console.log( "favById" , favById.length )

*/

const btnCreateVideo = document.getElementById('btn-create-begin')

///////

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
    