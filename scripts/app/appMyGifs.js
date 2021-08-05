
import {getMyGifs} from '../services/giftService.js'
import {createMyGifsSection} from '../domain/myGifs/myGifs.js'


let favLocal = JSON.parse(localStorage.getItem('favorites'))
const iconFavoritos = document.getElementById("icon-favoritos")
if (!favLocal || favLocal.length == 0){
    iconFavoritos.style.display = 'inline'
}

createMyGifsSection(favLocal)

let myGifsLocal = JSON.parse(localStorage.getItem('myGifs'))
console.log( "myGifsLocal" , myGifsLocal )

let algo = getMyGifs("4pzwqgJX4xel5VG8pj").then( (algo) => {
    console.log( "algo" , algo   )
    
})
console.log( "algo" , algo   )
