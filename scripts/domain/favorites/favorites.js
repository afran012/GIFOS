import * as favoritesTemplate from "../favorites/favoritesTemplate.js";

const createFavoritesSection = async (favoritos=[]) => {
    const gifsFavoriteSection= document.getElementById('favorites-container');
    
    try {
        let gifsFavoritesDiv = document.getElementById('favorites-section')
        if (!gifsFavoritesDiv) {
            gifsFavoritesDiv =  document.createElement("div") 
            gifsFavoritesDiv.classList.add("favorites-section")
            gifsFavoritesDiv.setAttribute("id", "favorites-section")  
        }
        if (favoritos) {
            favoritos.forEach(gif => {
                let cardGif = favoritesTemplate.favoriteTemplate(gif)
                gifsFavoritesDiv.appendChild(cardGif)
            })
            gifsFavoriteSection.appendChild(gifsFavoritesDiv)
        }
    }
    catch (error) {
        console.error(error);
    }
}


const addImgFavSource = (flag=0, gifId , imgFav , patho) => {
    let favLocal = JSON.parse(localStorage.getItem('favorites'))
    if ( !favLocal ) {
        localStorage.setItem( 'favorites' , JSON.stringify([]))
    }     
    let favLocalStorage = JSON.parse(localStorage.getItem('favorites'))
    let found = favLocalStorage.find( (gifo) => gifo._gifId == gifId);
    if (found) {
        imgFav.src = `${patho}assets/images/icon-fav-active.svg`
    }
    else {
        imgFav.src = `${patho}assets/images/icon-fav-hover.svg`
    }
    if (!found && flag == 1) {
        imgFav.src = `${patho}assets/images/icon-fav.svg`
    }
}

export {createFavoritesSection , addImgFavSource }
