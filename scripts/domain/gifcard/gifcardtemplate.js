/*const createHtmElement = ({tag , classElement}) => {
    let tagElement = document.createElement(`${tag}`)
    card.classList.add(`${classElement}`)
    return tagElement

}*/
import {Favorite} from "../../models/favorites.js";
//import {gifLocalStorage} from "../gifcard/gifcard.js";


const gifcardTemplate = ( {urlGifSmall, urlGifBig, urlGifOriginal, gifId}) => {

    let card = document.createElement("div")
    //card.classList.add("div-gifo")
    card.classList.add("favorite-gifo")   

    let imgGif = document.createElement("img")
    imgGif.src = urlGifSmall;
    imgGif.setAttribute("alt", "gif-item");
    imgGif.classList.add("img-gif")
    

    let  icons= document.createElement("div")
    icons.classList.add("div-icons-gifo")

    let imgFav = document.createElement("img")
    imgFav.src = "../assets/images/icon-fav.svg";
    
    imgFav.classList.add("img-fav")
    imgGif.setAttribute("gifId", gifId);
    imgFav.addEventListener("click", (event) => {
        let favLocal = JSON.parse(localStorage.getItem('favorites'))
        console.log( "favLocal" , favLocal )
        if ( !favLocal ) {
            localStorage.setItem( 'favorites' , JSON.stringify([]))
        }
        let favoriteGif = new Favorite(gifId, urlGifOriginal, urlGifSmall, urlGifBig , gifId)
        console.log( `favoriteGif ${favoriteGif.gifId} ` , typeof(favoriteGif.gifId) )
        let favLocalStorage = JSON.parse(localStorage.getItem('favorites'))
        let found = favLocalStorage.find( (gifo) => gifo._gifId == favoriteGif.gifId);
        console.log( "found" , found )
        if ( !found ) {
            favLocalStorage.push(favoriteGif)
        }
        else {
            favLocalStorage.pop( (gifo) => gifo.gifId === favoriteGif.gifId)     
        }
        localStorage.setItem( 'favorites' , JSON.stringify(favLocalStorage))      
        console.log('gifLocalStorage', localStorage)
    })
    

    let imgDown = document.createElement("img")
    imgDown.src = "../assets/images/icon-download.svg";
    imgDown.setAttribute("alt", "icon-download");
    imgDown.classList.add("icon-download");
    imgDown.addEventListener("click", async (event) => {
        let a = document.createElement('a');
        let response = await fetch(urlGifOriginal)
        console.log('response', response)
        let file = await response.blob();
        a.download = gifId
        a.href = window.URL.createObjectURL(file);
        a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
        // simulating link click
        a.click();
        
    })
    

    let imgFull = document.createElement("img")
    imgFull.src = "../assets/images/icon-max-normal.svg"
    imgFull.setAttribute("alt", "icon-max-normal");
    imgFull.classList.add("icon-max-normal")
    imgFull.addEventListener("click", async (event) => {
        console.log('click')
        // aca pones la logica de hacer grande

    })
    // element.classList.contains(className);
    


    card.appendChild(imgGif)  
    icons.appendChild(imgFav)  
    icons.appendChild(imgDown)
    icons.appendChild(imgFull)
    card.appendChild(icons)
    //console.log(card)
    return card

}

export {gifcardTemplate}