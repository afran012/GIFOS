import {openVideo , recordVideo , stopVideo , uploadGif , pauseVideo} from '../domain/createvideo/createVideo.js';



 
const btnVideo = document.getElementById ("btn-create-begin");
let action = "openVideo";


//const btnVideo = document.getElementById ("btn-create-begin");
const step1 = document.getElementById ("button-step1")
const step2 = document.getElementById ("button-step2")
const step3 = document.getElementById ("button-step3")



 btnVideo.addEventListener("click" , async (event) => {
    console.log(action)
     if ( action === "openVideo") {
        await openVideo();
        action = "recordVideo"
     }

     else if ( action === "recordVideo") {
         await recordVideo();
         action = "stopVideo"
        
        
     }

     else if ( action === "stopVideo") {
        //await pauseVideo();
        await stopVideo();
        action = "uploadVideo"
     }

     else if ( action === "uploadVideo") {
      await uploadGif();
      action = "openVideo"
   }
})

export {action}