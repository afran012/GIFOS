
import {darkMode} from '../domain/darkMode/darkMode.js'
import {closeMaximize} from '../domain/maximize/maximize.js'
import {getMyGifs} from '../services/giftService.js'
import {createMyGifsSection} from '../domain/myGifs/myGifs.js'
import {trendGifsSection} from '../domain/trend/trendSection.js'
import { $ } from "../utils/domUtils.js";

$("#dark-mode").on("click", ()=>{
    let darkLocal = JSON.parse(localStorage.getItem('darkLocal'))
    console.log( "darkLocal" , darkLocal)
    
    if (darkLocal=="light" ) {
        $("#dark-mode").htmlElement.innerHTML = "MODO NOCTURNO"     
        
    } else {
        $("#dark-mode").htmlElement.innerHTML = "MODO DIURNO"       
    }
})


let path
await trendGifsSection( path = './../');


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
