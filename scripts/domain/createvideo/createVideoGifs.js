import {getMyGifs} from '../../services/giftService.js'
import {Favorite} from "../../models/favorites.js";

const localStorageCreatedGif = async (myGifId) => {
    try {
        let myGifData = await getMyGifs(myGifId)
        let gifId = myGifData.id
        let urlGifSmall = myGifData.images.original_still.url
        let urlGifBig = myGifData.images.fixed_width.url
        let urlGifOriginal = myGifData.images.original.url
        let gifName = myGifData.slug

        let myGif = new Favorite( gifId , urlGifSmall , urlGifBig , urlGifOriginal , gifName )

        let myGifLocal = JSON.parse(localStorage.getItem('myGifs'))
        if ( !myGifLocal ) {
            localStorage.setItem( 'myGifs' , JSON.stringify([]))
        }
        let myGifLocalStorage = JSON.parse(localStorage.getItem('myGifs'))
        let found = myGifLocalStorage.find( (gifo) => gifo._gifId == myGifId);
        if ( !found ) {
            myGifLocalStorage.push(myGif)
        }
        else {
            myGifLocalStorage.pop( (gifo) => gifo.gifId === myGif.gifId)     
        }
        localStorage.setItem( 'myGifs' , JSON.stringify(myGifLocalStorage))      
        console.log('gifLocalStorage', localStorage)

    }
    catch (error) {
        console.error(error);
    }

}

export {localStorageCreatedGif  }