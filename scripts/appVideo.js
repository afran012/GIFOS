 import {openVideo , recordVideo , stopVideo , uploadGif} from './domain/createvideo/createVideo.js';
 
 const btnVideo = document.getElementById ("btn-create-begin");
 let action = "openVideo";

 btnVideo.addEventListener("click" , async (event) => {
     if ( action === "openVideo") {
        await openVideo();
        action = "recordVideo"
     }

     else if ( action === "recordVideo") {
        await recordVideo();
        action = "stopVideo"
     }


     else if ( action === "stopVideo") {
        await stopVideo();
        action = "uploadVideo"
     }

     else if ( action === "uploadVideo") {
      await uploadGif();
      action = "openVideo"
   }

    

})