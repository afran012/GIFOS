/*const createHtmElement = ({tag , classElement}) => {
    let tagElement = document.createElement(`${tag}`)
    card.classList.add(`${classElement}`)
    return tagElement

}*/
import {Favorite} from "../../models/favorites.js";
import {gifLocalStorage} from "../gifcard/gifcard.js";





const gifcardTemplate = ( {urlGifSmall, urlGifOriginal, gifId}) => {

    let card = document.createElement("div")
    card.classList.add("div-gifo")  

    let imgGif = document.createElement("img")
    imgGif.src = urlGifSmall;
    imgGif.setAttribute("alt", "gif-item");
    imgGif.classList.add("img-gif")
    

    let  icons= document.createElement("div")
    icons.classList.add("div-icons-gifo")

    let imgFav = document.createElement("img")
    imgFav.src = "./assets/images/icon-fav.svg";
    imgFav.classList.add("img-fav")
    imgGif.setAttribute("gifId", gifId);
    imgFav.addEventListener("click", (event) => {
        console.log('gifLocalStorage', gifLocalStorage)
        let gif = localStorage.getItem(gifId) 
        if (!gif) {
            let favoriteGif = new Favorite(gifId, urlGifOriginal, urlGifSmall)
            gifLocalStorage.setItem(gifId, favoriteGif)
        }
        else {
            gifLocalStorage.removeItem(gifId)
        }
    })
    

    let imgDown = document.createElement("img")
    imgDown.src = "./assets/images/icon-download.svg";
    imgDown.setAttribute("alt", "icon-download");
    imgDown.classList.add("icon-download")
    

    let imgFull = document.createElement("img")
    imgFull.src = "./assets/images/icon-max-normal.svg"
    imgFull.setAttribute("alt", "icon-max-normal");
    imgFull.classList.add("icon-max-normal")
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