import * as GifService from "../../services/giftService.js";
import * as gifTemplate from "../gifcard/gifcardtemplate.js";

let gifLocalStorage = window.localStorage;

const createSearchSection = async (tag , limit , offset) => {
    const gifsSearchSectios= document.getElementById('gifs-search-container');
    
    try {
        let gifsSearchDiv = document.getElementById('favorites-section')
        console.log("gifsSearchDiv" , gifsSearchDiv )
        if (!gifsSearchDiv) {
            gifsSearchDiv =  document.createElement("div")
            console.log("gifsSearchDiv" , gifsSearchDiv )   
            gifsSearchDiv.classList.add("favorites-section")
            gifsSearchDiv.setAttribute("id", "favorites-section")
            console.log("gifsSearchDiv" , gifsSearchDiv )    
        }
        const gifs = await GifService.getGifSearch(tag,limit,offset)

        gifs.forEach(gif => {
            let urlWrapper = {
                gifId: gif.id,
                urlGifSmall: gif.images.preview_webp.url,
                urlGifBig: gif.images.fixed_width.url,
                urlGifOriginal: gif.images.original.url,
                gifName: gif.slug,
            }
            console.log(gif)
            let cardGif = gifTemplate.gifcardTemplate(urlWrapper)
            gifsSearchDiv.appendChild(cardGif)
        })
        gifsSearchSectios.appendChild(gifsSearchDiv)

    }
    catch (error) {
        console.error(error);
    }

}
export {createSearchSection , gifLocalStorage}