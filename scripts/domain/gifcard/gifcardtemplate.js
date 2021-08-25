import {openMaximize} from './../maximize/maximize.js'
import {Favorite} from "../../models/favorites.js";

const gifcardTemplate = ( {urlGifSmall, urlGifBig, urlGifOriginal, gifId , gifUser , gifTitle}) => {


    let addImgFavSource = (flag=0) => {
        let favLocal = JSON.parse(localStorage.getItem('favorites'))
        //console.log( "favLocal" , favLocal )
        if ( !favLocal ) {
            localStorage.setItem( 'favorites' , JSON.stringify([]))
        }     
        let favLocalStorage = JSON.parse(localStorage.getItem('favorites'))
        let found = favLocalStorage.find( (gifo) => gifo._gifId == gifId);
        if (found) {
            imgFav.src = `./assets/images/icon-fav-active.svg`
        }
        else {
            imgFav.src = `./assets/images/icon-fav-hover.svg`
        }
        if (!found && flag == 1) {
            imgFav.src = `./assets/images/icon-fav.svg`
        }
    }

    let card = document.createElement("div")
    card.classList.add("favorite-gifo") 

    let imgGif = document.createElement("img")
    imgGif.src = urlGifSmall;
    imgGif.setAttribute("alt", "gif-item");
    imgGif.classList.add("img-gif")
    
    let  icons= document.createElement("div")
    icons.classList.add("div-icons-gifo")
    icons.style.display = "none"

    let imgFav = document.createElement("img")
    imgFav.src = "./assets/images/icon-fav.svg";
    imgFav.classList.add("img-fav")
    imgGif.setAttribute("gifId", gifId);
    addImgFavSource(1)

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
        let arrayIndex = favLocalStorage.indexOf(found)
        if ( !found ) {
            favLocalStorage.push(favoriteGif)
            imgFav.src = `./assets/images/icon-fav-active.svg`
        }
        else {
            favLocalStorage.splice(arrayIndex,1)
            imgFav.src = `./assets/images/icon-fav-hover.svg`
              
        }
        localStorage.setItem( 'favorites' , JSON.stringify(favLocalStorage))      
    })
    
    let imgDown = document.createElement("img")
    imgDown.src = "./assets/images/icon-download.svg";
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
    imgFull.src = "./assets/images/icon-max-normal.svg"
    imgFull.setAttribute("alt", "icon-max-normal");
    imgFull.classList.add("icon-max-normal")
    imgFull.addEventListener("click", async (event) => {
        console.log('click')
        openMaximize(urlGifBig)
    })

    card.appendChild(imgGif)  
    icons.appendChild(imgFav)  
    icons.appendChild(imgDown)
    icons.appendChild(imgFull)
    card.appendChild(icons)


    let cardHover = document.createElement("div")
    let userText = document.createElement("div")
    let tittleText = document.createElement("div")
    userText.classList.add("user-text")
    tittleText.classList.add("tittle-text")

    userText.innerHTML = gifUser
    tittleText.innerHTML = gifTitle
    userText.style.display = "none"
    tittleText.style.display = "none"

    card.appendChild(userText)
    card.appendChild(tittleText)

    card.appendChild(cardHover)
    cardHover.classList.add("hover-gif")
    cardHover.style.display = "none"



    let elementsListHover = [imgGif,cardHover , icons , tittleText , userText]

    elementsListHover.forEach((element) => {
        element.addEventListener("mouseover", e =>{
            icons.style.display = "grid"  
            cardHover.style.display = "inline"  
            userText.style.display = "inline"  
            tittleText.style.display = "inline"
        });
        element.addEventListener("mouseout", e =>{
            icons.style.display = "none"
            cardHover.style.display = "none" 
            userText.style.display = "none"  
            tittleText.style.display = "none"
        });
    })


    imgFav.addEventListener("mouseover", e => {
        addImgFavSource()
    });
    imgFav.addEventListener("mouseout", e =>{
        addImgFavSource(1)
    });

    imgDown.addEventListener("mouseover", e => {
        imgDown.src = `./assets/images/icon-download-hover.svg`;
    });
    imgDown.addEventListener("mouseout", e =>{
        imgDown.src = `./assets/images/icon-download.svg`;
    });

    imgFull.addEventListener("mouseover", e => {
        imgFull.src = `./assets/images/icon-max-hover.svg`;
    });
    imgFull.addEventListener("mouseout", e =>{
        imgFull.src = `./assets/images/icon-max-normal.svg`;
    });

    
    return card
}

export {gifcardTemplate}
