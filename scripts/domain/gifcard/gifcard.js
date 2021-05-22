import * as GifService from "../services/giftService.js";

import * as gifTemplate from "../domain/giftcardtemplate.js";

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
            let gifUrl = gif.images.fixed_height_still.url;   
            let cardGif = gifTemplate.gitcardTemplate(gifUrl)
            gifsSearchDiv.appendChild(cardGif)
        })
        gifsSearchSectios.appendChild(gifsSearchDiv)

    }

    //return await gifTempleate.
    catch (error) {
        console.error(error);
    }

}
export {createSearchSection}