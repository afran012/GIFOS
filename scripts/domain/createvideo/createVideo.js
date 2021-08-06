import { createGif } from '../../services/giftService.js'
import { API_DETAILS , CREATE_GIF } from '../../configs/config.js'
//import {action} from '../../appVideo.js'
import {localStorageCreatedGif} from '../createvideo/createVideoGifs.js'
//import { FormData } from '../../models/createGif.js'

const step1 = document.getElementById ("button-step1")
const step2 = document.getElementById ("button-step2")
const step3 = document.getElementById ("button-step3")
const btnVideo = document.getElementById ("btn-create-begin");
const msgStep1 = document.getElementById ("msg-step-1");
const msgStep2 = document.getElementById ("msg-step-2");
const msgStep3 = document.getElementById ("msg-step-3");
const msgStep4 = document.getElementById ("msg-step-4");


const api_key = CREATE_GIF.api_key
const username = CREATE_GIF.username 
const tags = CREATE_GIF.tags
let recorder





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
    btnVideo.style.display="none";
    msgStep1.classList.remove("msg-active");
    msgStep1.classList.add("msg-inactive");
    msgStep2.classList.remove("msg-inactive");
    msgStep2.classList.add("msg-active");
    step1.classList.remove("btnstep");
    step1.classList.add("btnstepActive");
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
      // Do something with the video here.
      video.play()
      btnVideo.textContent = "Grabar"
    }
    msgStep2.classList.remove("msg-active");
    msgStep2.classList.add("msg-inactive");
    btnVideo.style.display="grid";
    step2.classList.remove("btnstep");
    step2.classList.add("btnstepActive");
    step1.classList.remove("btnstepActive");
    step1.classList.add("btnstep");
  } 
  catch(err) {
    /* handle the error */
    action = "openVideo";
    console.log(err)
  }
}






const recordVideo = async () =>{
  btnVideo.textContent = "Finalizar"
  btnVideo.style.display="none";
  
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
        btnVideo.style.display="grid";
    })
    //.catch(function(err) { console.log(err.name); }); // always check for errors at the end. 
    .catch(function(err) { 
      action = "recordVideo"
      console.log(err); });
}


const pauseVideo = async () =>{
  btnVideo.style.display="none";

  await navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
    // Do something with the video here.
    console.log('paused')
    video.pause()
    btnVideo.textContent = "Detener"
    btnVideo.style.display="grid";
  };
}).catch(function(err) { console.log(err.name); }); // always check for errors at the end.
}


const stopVideo = async () =>{ 
  btnVideo.style.display="none";

  await navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {

      video.play()
      console.log('stop recording')
      btnVideo.textContent = "Grabar"
      recorder.stopRecording();
      console.log('recorder', recorder)
      //video.pause()
      btnVideo.textContent = "Subir Gifo"
      btnVideo.style.display="grid";
      let recordFile = recorder.getBlob()

  };
  
  //console.log(recorder)
}).catch(function(err) { console.log(err); }); // always check for errors at the end.
}


const uploadGif = async () => {
  try {
    msgStep3.classList.remove("msg-inactive");
    msgStep3.classList.add("msg-active");
    btnVideo.style.display="none";
    step3.classList.remove("btnstep");
    step3.classList.add("btnstepActive");
    step2.classList.remove("btnstepActive");
    step2.classList.add("btnstep");
    //console.log('recorder2', recorder)
    //console.log("recordFile Type" , typeof(recorder))
    //let recorderBlob = recorder.blob
    //console.log("recordFile.blob" , typeof(recorderBlob))
    //console.log("recordFile.blob Type" , typeof(recorderBlob))

    let recordFile = recorder.getBlob();

    //let file = (recordFile , "Gif")
    //console.log("recordFile:" , recordFile)
    //console.log("recordFile type" , typeof(recordFile))
    //console.log("recordFile Type" , typeof(recordFile))  
    //let form = new FormData(api_key , username , file  , tags);

    var form = new FormData();

    form.append('api_key', api_key);
    form.append('username', username);
    form.append('file', recordFile, 'myGif.gif');
    form.append('tags', tags);
    console.log( "form" , form )
    
    let gifoIdCreated = await createGif(form);
    await localStorageCreatedGif(gifoIdCreated);

    btnVideo.style.display="grid"; 
    recorder = null
    btnVideo.textContent = "Subir"

    msgStep3.classList.remove("msg-active");
    msgStep3.classList.add("msg-inactive");
    msgStep4.classList.remove("msg-inactive");
    msgStep4.classList.add("msg-active");
  }
  catch (error){
    console.error(error);
  }
  

}

export {openVideo , recordVideo , stopVideo , uploadGif, pauseVideo}