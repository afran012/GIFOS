
import {createTrendSection} from '../domain/trend/trend.js'
import {createFavoritesSection} from '../domain/favorites/favorites.js'


let favLocal = JSON.parse(localStorage.getItem('favorites'))
const iconFavoritos = document.getElementById("icon-favoritos")

if (!favLocal || favLocal.length == 0){
    iconFavoritos.style.display = 'inline'
}


createFavoritesSection(favLocal)
