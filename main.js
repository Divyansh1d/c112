Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function captureImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image src="'+data_uri+'"/>';  
      });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DHX1s761m/',model_loaded);

function model_loaded() {
    console.log('Model Loaded');
  }

  
  