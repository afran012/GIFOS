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

export {createFavoritesSection}
