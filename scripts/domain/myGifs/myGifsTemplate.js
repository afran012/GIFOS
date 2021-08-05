import {Favorite} from "../../models/favorites.js";
import {MyGif} from "../../models/myGifs.js";





const favoriteTemplate = ( {_urlSmall, _urlOrig, _gifId, _gifName}) => {

    let card = document.createElement("div")
    card.classList.add("favorite-gifo")   

    let imgGif = document.createElement("img")
    imgGif.src = _urlSmall;
    imgGif.setAttribute("alt", "gif-item");
    imgGif.classList.add("img-gif")
    

    let  icons= document.createElement("div")
    icons.classList.add("div-icons-gifo")

    let imgFav = document.createElement("img")
    imgFav.src = "../assets/images/icon-fav.svg";
    imgFav.classList.add("img-fav")
    imgGif.setAttribute("gifId", _gifId);
    imgFav.addEventListener("click", (event) => {
        
        let favLocal = JSON.parse(localStorage.getItem('favorites'))
        console.log( "favLocal" , favLocal )
        if ( !favLocal ) {
            localStorage.setItem( 'favorites' , JSON.stringify([]))
        }
        let favoriteGif = new MyGif(_gifId, _urlOrig, _urlSmall, _gifName)
        console.log( `favoriteGif ${favoriteGif._gifId} ` , typeof(favoriteGif._gifId) )
        let favLocalStorage = JSON.parse(localStorage.getItem('favorites'))
        let found = favLocalStorage.find( (gifo) => gifo._gifId == favoriteGif._gifId);
        console.log( "found" , found )
        if ( !found ) {
            favLocalStorage.push(favoriteGif)
        }
        else {
            favLocalStorage.pop( (gifo) => gifo.gifId === _gifId)  
            card.style.display = 'none'   
        }
        localStorage.setItem( 'favorites' , JSON.stringify(favLocalStorage))      
    })
    

    let imgDown = document.createElement("img")
    imgDown.src = "../assets/images/icon-download.svg";
    imgDown.setAttribute("alt", "icon-download");
    imgDown.classList.add("icon-download");
    imgDown.addEventListener("click", async (event) => {
        let a = document.createElement('a');
        let response = await fetch(_urlOrig)
        console.log('response', response)
        let file = await response.blob();
        a.download = _gifName
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

export {favoriteTemplate}