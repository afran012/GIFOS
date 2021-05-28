 import {openVideo , recordVideo , stopVideo} from './domain/createvideo/createVideo.js';
 
 const btnVideo = document.getElementById ("btn-create-begin");
 let flagVideo = 0;

 btnVideo.addEventListener("click" , async (event) => {
     if ( flagVideo == 0) {
        await openVideo();
        return (flagVideo = 3)
     }

     if ( flagVideo == 1) {
        await stopVideo();
        return (flagVideo = 2)
     }


     if ( flagVideo == 3) {
        await stopVideo();
        return (flagVideo = 0)
     }

    

})