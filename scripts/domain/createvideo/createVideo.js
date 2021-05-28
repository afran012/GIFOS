import { createGif } from '../../services/giftService.js'
import { API_DETAILS } from '../../configs/config.js'

const api_key = api_key
const username = username 
const file = file 
const fileName = fileName
const tags = tags




const btnVideo = document.getElementById ("btn-create-begin");

let video = document.querySelector('video');
let constraints = window.constraints = {
  audio: false,
  video: { width: 360 , height: 200 }
};

const openVideo = async () =>{

    await navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
        // Do something with the video here.
        video.play()
        btnVideo.textContent = "Detener"
      };
    }).catch(function(err) { console.log(err.name); }); // always check for errors at the end.

}

const recordVideo = async () =>{
    await navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
        // Do something with the video here.
        video.play()
        recorder = RecordRTC(mediaStream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
             console.log('started')
           },
          });
        recorder.startRecording();

      };
    })
    .catch(function(err) { console.log(err.name); }); // always check for errors at the end. 
}
const pauseVideo = async () =>{

  await navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
    // Do something with the video here.
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
      recorder.stopRecording();
  };
}).catch(function(err) { console.log(err.name); }); // always check for errors at the end.
}


const uploadGif = async () => {
  let file = await recorder.getBlob();
  var formData = new FormData(api_key , username , file , fileName, tags);
  await createGif(formData);  
  console.log(file)

}

export {openVideo , recordVideo , stopVideo , uploadGif, pauseVideo}