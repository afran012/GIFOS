import { $ } from "./../../utils/domUtils.js";
import { GIFMAX } from "../../configs/config.js";
import {Favorite} from "../../models/favorites.js";

const closeMaximize = async () => {
    let close = $("#full-size-gif").htmlElement
    close.style.display = "none"
}

const openMaximize = async (urlGif) => {
    let close = $("#full-size-gif").htmlElement
    $("#img-full-size-mode").attr("src", urlGif)
    close.style.display = "grid" 
}



$("#close-full-size-mode").on("click", closeMaximize)


let download = $("#download-full-size-mode").htmlElement
console.log(download)
download.addEventListener("click", async (event) => {
    try{
        console.log('urlGifOriginal', GIFMAX.gifMax.urlGifOriginal)
        console.log('gifId', GIFMAX.gifMax.gifTitle)
        let a = document.createElement('a');
        let response = await fetch(GIFMAX.gifMax.urlGifOriginal)
        console.log('response', response)
        let file = await response.blob();
        a.download = GIFMAX.gifMax.gifTitle
        a.href = window.URL.createObjectURL(file);
        a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
        a.click(); 

    }
    catch (error) { console.log(error) }
       
});


let favorite = $("#favorite-full-size-mode").htmlElement


favorite.addEventListener("click", async (event) => {        
    let favLocal = JSON.parse(localStorage.getItem('favorites'))
    console.log( "favLocal" , favLocal )
    if ( !favLocal ) {
        localStorage.setItem( 'favorites' , JSON.stringify([]))
    }
    let favoriteGif = new Favorite(GIFMAX.gifMax.gifId, GIFMAX.gifMax.urlGifOriginal, GIFMAX.gifMax.urlGifSmall, GIFMAX.gifMax.urlGifBig)


    console.log( `favoriteGif ${favoriteGif.gifId} ` , typeof(favoriteGif.gifId) )
    let favLocalStorage = JSON.parse(localStorage.getItem('favorites'))
    let found = favLocalStorage.find( (gifo) => gifo._gifId == favoriteGif.gifId);
    let arrayIndex = favLocalStorage.indexOf(found)
    if ( !found ) {
        console.log("agrego")
        favLocalStorage.push(favoriteGif)
        //imgFav.src = `${patho}assets/images/icon-fav-active.svg`
    }
    else {
        console.log("Borró")
        favLocalStorage.splice(arrayIndex,1)
        //imgFav.src = `${patho}assets/images/icon-fav-hover.svg`
    }
    localStorage.setItem( 'favorites' , JSON.stringify(favLocalStorage))
})

export {closeMaximize, openMaximize}
