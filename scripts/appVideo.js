 import {openVideo} from './domain/createvideo/createVideo.js';
 
 const btnVideo = document.getElementById ("btn-create-begin");

 btnVideo.addEventListener("click" , async (event) => {
    openVideo();

    
})