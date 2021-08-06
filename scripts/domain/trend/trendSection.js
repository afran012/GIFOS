import {trendSection} from '../../services/giftService.js';
import * as gifTemplate from "../trend/trendSectionTemplate.js";


const trendGifsSection = async ( path = './', limit = 3 ,offset = 0) => {
    
    const gifsTrendSectios= document.getElementById('div-trend-gif');
    
    try {

        /*
        let gifsTrendDiv = document.getElementById('trend-section')
        console.log("gifsTrendDiv" , gifsTrendDiv )
        if (!gifsTrendDiv) {
            gifsTrendDiv =  document.createElement("div")
            console.log("gifsTrendDiv" , gifsTrendDiv )   
            gifsTrendDiv.classList.add("trend-section")
            gifsTrendDiv.setAttribute("id", "trend-section")
            console.log("gifsTrendDiv" , gifsTrendDiv )    
        }*/
        const gifs = await trendSection( limit ,offset )

        gifs.forEach(gif => {
            let urlWrapper = {
                gifId: gif.id,
                urlGifSmall: gif.images.preview_webp.url,
                urlGifBig: gif.images.fixed_width.url,
                urlGifOriginal: gif.images.original.url,
                gifName: gif.slug,
            }
            console.log(gif)
            let cardGif = gifTemplate.gifcardTrendTemplate(path,urlWrapper)
            console.log(cardGif)

            cardGif.classList.add("trendgif-section")
            //gifsTrendDiv.appendChild(cardGif)
            gifsTrendSectios.appendChild(cardGif)
        })
        //gifsTrendSectios.appendChild(gifsTrendDiv)

    }
    catch (error) {
        console.error(error);
    }

}
export {trendGifsSection}