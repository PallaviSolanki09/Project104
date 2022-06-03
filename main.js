Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(selfie){
        document.getElementById("result").innerHTML="<img id='capture_img' src='"+selfie+"'>";
    });
}

console.log("version of ml5",ml5.version);

classifie=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1xOlX6tvB/model.json',modelloded);

function modelloded(){
    console.log("model is loded");
}