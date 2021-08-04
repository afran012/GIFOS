import * as GifService from "../../services/giftService.js";
import * as gifTemplate from "../gifcard/gifcardtemplate.js";

let gifLocalStorage = window.localStorage;

const createSearchSection = async (tag , limit , offset) => {
    const gifsSearchSectios= document.getElementById('gifs-search-container');
    //gifsSearchSectios.innerHTML = ""
    //const gifsSearchDiv = document.getElementById('gifs-search');
    //gifsSearchDiv.innerHTML = ""

    const gifsSearchDiv =  document.createElement("div")
    //imgGif.setAttribute("alt", "gif-item");
    gifsSearchDiv.classList.add("gifs-search-section")
    //class="gifs-search-section" id="gifs-search">

    try {
        const gifs = await GifService.getGifSearch(tag,limit,offset)

        gifs.forEach(gif => {
            let urlWrapper = {
                gifId: gif.id,
                urlGifSmall: gif.images.fixed_height_still.url,
                urlGifOriginal: gif.images.original.url,
                gifName: gif.slug,
            }
            console.log(gif)
            let cardGif = gifTemplate.gifcardTemplate(urlWrapper)
            gifsSearchDiv.appendChild(cardGif)
        })
        gifsSearchSectios.appendChild(gifsSearchDiv)

    }

    //return await gifTempleate.
    catch (error) {
        console.error(error);
    }

}
export {createSearchSection , gifLocalStorage}