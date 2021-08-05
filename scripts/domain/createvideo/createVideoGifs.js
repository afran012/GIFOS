import {MyGif} from "../../models/createGif.js";

const localStorageCreatedGif = async (myGifId) => {
    console.log( "myGifId" , myGifId )
    try {
        let myGifLocal = JSON.parse(localStorage.getItem('myGifs'))
        if ( !myGifLocal ) {
            localStorage.setItem( 'myGifs' , JSON.stringify([]))
        }
        let myGif = new MyGif(myGifId)
        console.log( `myGif ${myGif.gifId} ` , typeof(myGif.gifId) )
        let myGifLocalStorage = JSON.parse(localStorage.getItem('myGifs'))
        let found = myGifLocalStorage.find( (gifo) => gifo._gifId == myGif.gifId);
        console.log( "found" , found )
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



export {localStorageCreatedGif }