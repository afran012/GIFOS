import { createGif } from '../../services/giftService.js'
import { API_DETAILS , CREATE_GIF } from '../../configs/config.js'
import { FormData } from '../../models/createGif.js'


const api_key = CREATE_GIF.api_key
const username = CREATE_GIF.username 
const tags = CREATE_GIF.tags
let recorder




const btnVideo = document.getElementById ("btn-create-begin");

let video = document.querySelector('video');
let constraints = window.constraints = {
  audio: false,
  video: { width: 360 , height: 200 }
};
/*
const openVideo = async () =>{

    await navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
        // Do something with the video here.
        video.play()
        btnVideo.textContent = "Grabar"
      };
    }).catch(function(err) { console.log(err.name); }); // always check for errors at the end.

}*/

const openVideo =  async function getMedia() {
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
    // Do something with the video here.
    video.play()
    btnVideo.textContent = "Grabar"
  };

  } catch(err) {
    /* handle the error */
    console.log(err)
  }
}






const recordVideo = async () =>{
    await navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
        // Do something with the video here.
        video.play()
      };
      recorder = RecordRTC(mediaStream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function() {
         console.log('started')
       }
      });
    recorder.startRecording();
    })
    //.catch(function(err) { console.log(err.name); }); // always check for errors at the end. 
    .catch(function(err) { console.log(err); });
}
const pauseVideo = async () =>{

  await navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
    // Do something with the video here.
    console.log('paused')
    video.pause()
    btnVideo.textContent = "Detener"
  };
}).catch(function(err) { console.log(err.name); }); // always check for errors at the end.
}


const stopVideo = async () =>{

  await navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
      console.log('stop recording')
      btnVideo.textContent = "Empezar"
      recorder.stopRecording();
      console.log('recorder', recorder)
      video.pause()
  };
  
  //console.log(recorder)
}).catch(function(err) { console.log(err); }); // always check for errors at the end.
}


const uploadGif = async () => {
  try {
    let file = await recorder.getBlob();
    //let file = fileBlob.push('Gif');
    console.log(file)    
    var formData = new FormData(api_key , username , (file , 'Gif') , tags);
    console.log('Form dadata::' , formData)
    await createGif(formData);    
  }
  catch (error){
    console.error(error);
  }
  

}

export {openVideo , recordVideo , stopVideo , uploadGif, pauseVideo}