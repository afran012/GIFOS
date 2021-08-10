
import {createFavoritesSection} from '../domain/favorites/favorites.js'
import {trendGifsSection} from '../domain/trend/trendSection.js'

let patho

await trendGifsSection( patho = './../');


let favLocal = JSON.parse(localStorage.getItem('favorites'))
const iconFavoritos = document.getElementById("icon-favoritos")

if (!favLocal || favLocal.length == 0){
    iconFavoritos.style.display = 'inline'
}


createFavoritesSection(favLocal)
