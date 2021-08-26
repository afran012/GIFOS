import * as GifService from "../../services/giftService.js";
import { $ } from "../../utils/domUtils.js";
import * as gifTemplate from "../gifcard/gifcardtemplate.js";

let gifLocalStorage = window.localStorage;

const createSearchSection = async (tag , limit , offset) => {
    $("#search-more").show()
    const gifsSearchSectios= document.getElementById('gifs-search-container');
    
    try {
        let gifsSearchDiv = document.getElementById('favorites-section')
        //console.log("gifsSearchDiv" , gifsSearchDiv )
        if (!gifsSearchDiv) {
            gifsSearchDiv =  document.createElement("div")
            //console.log("gifsSearchDiv" , gifsSearchDiv )   
            gifsSearchDiv.classList.add("favorites-section")
            gifsSearchDiv.setAttribute("id", "favorites-section")
            //console.log("gifsSearchDiv" , gifsSearchDiv )    
        }
        const gifs = await GifService.getGifSearch(tag,limit,offset)
        console.log(gifs)
        console.log(gifs.length)
        if (gifs.length==0) {
            console.log("entro")
            $("#search-more").hide()
            $("#trending").htmlElement.style.display = "grid"
            $("#search-not-found").show()
            $("#result-found").htmlElement.innerHTML = `"${tag}"`
            $("#p-result-not-found").show()
        }
        else{
            $("#trending").hide()
            $("#search-more").show()
            $("#search-not-found").hide()
            $("#result-found").show()
            $("#result-found").htmlElement.innerHTML = `"${tag}"`
            $("#p-result-not-found ").hide()

        }

        if (gifs.length<limit) {
            $("#search-more").hide()
        }

        gifs.forEach(gif => {
            let urlWrapper = {
                gifId: gif.id,
                urlGifSmall: gif.images.preview_webp.url,
                urlGifBig: gif.images.fixed_width.url,
                urlGifOriginal: gif.images.original.url,
                gifName: gif.slug,
                gifUser: gif.username,
                gifTitle: gif.title
            }
            //console.log(gif)
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