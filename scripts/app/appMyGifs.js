
import {getMyGifs} from '../services/giftService.js'
import {createMyGifsSection} from '../domain/myGifs/myGifs.js'
import {trendGifsSection} from '../domain/trend/trendSection.js'

await trendGifsSection();


let gifsLocal = JSON.parse(localStorage.getItem('myGifs'))
const iconFavoritos = document.getElementById("icon-favoritos")
if (!gifsLocal || gifsLocal.length == 0){
    iconFavoritos.style.display = 'inline'
}

createMyGifsSection(gifsLocal)

let myGifsLocal = JSON.parse(localStorage.getItem('myGifs'))
console.log( "myGifsLocal" , myGifsLocal )

let algo = getMyGifs("4pzwqgJX4xel5VG8pj").then( (algo) => {
    console.log( "algo" , algo   )
    
})
console.log( "algo" , algo   )
