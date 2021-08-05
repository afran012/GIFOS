import {MyGif} from "../../models/myGifs.js";
import * as favoritesTemplate from "../favorites/favoritesTemplate.js";

const localStorageCreatedGif = async (myGifId) => {
    console.log( "myGifId" , myGifId )
    try {
        let myGifLocal = JSON.parse(localStorage.getItem('myGifs'))
        if ( !myGifLocal ) {
            localStorage.setItem( 'myGifs' , JSON.stringify([]))
        }
        let myGif = new MyGif(myGifId)
        console.log( `myGif ${myGif.gifId} ` , typeof(myGif.gifId) )
        let myGifLocalStorage = JSON.parse(localStorage.getItem('myGifs'))
        let found = myGifLocalStorage.find( (gifo) => gifo._gifId == myGif.gifId);
        console.log( "found" , found )
        if ( !found ) {
            myGifLocalStorage.push(myGif)
        }
        else {
            myGifLocalStorage.pop( (gifo) => gifo.gifId === myGif.gifId)     
        }
        localStorage.setItem( 'myGifs' , JSON.stringify(myGifLocalStorage))      
        console.log('gifLocalStorage', localStorage)

    }
    catch (error) {
        console.error(error);
    }

}




const createMyGifsSection = async (favoritos=[]) => {
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
                //console.log(gif)
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



export {localStorageCreatedGif , createMyGifsSection}