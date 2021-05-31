 import {openVideo , recordVideo , stopVideo , uploadGif} from './domain/createvideo/createVideo.js';
 
 const btnVideo = document.getElementById ("btn-create-begin");
 let flagVideo = 0;

 btnVideo.addEventListener("click" , async (event) => {
     if ( flagVideo == 0) {
        await openVideo();
        return (flagVideo = 1)
     }

     if ( flagVideo == 1) {
        await recordVideo();
        return (flagVideo = 2)
     }


     if ( flagVideo == 2) {
        await stopVideo();
        await uploadGif();
        return (flagVideo = 0)
     }

    

})