function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8RYNCpyxG/model.json',modelLoaded);

}
function modelLoaded(){
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
function gotResults(error,results){
 if(error){
    console.log(error);
 }
 else{
   console.log(results);
   random_number_r=Math.floor(Math.random()*255)+1;
   random_number_g=Math.floor(Math.random()*255)+1;
   random_number_b=Math.floor(Math.random()*255)+1;

   document.getElementById("result_label").innerHTML="Detected voice is of-"+results[0].label;
   document.getElementById("result_confidence").innerHTML="Detected dog -"+dog+" Detected cat -"+cat;
   document.getElementById("result_label").style.color="rgb("+random_number_b+","+random_number_g+","+random_number_r+")";
   document.getElementById("result_confidence").style.color="rgb("+random_number_b+","+random_number_g+","+random_number_r+")";
   img= document.getElementById("animal_img");
  if(results[0].label == "Dog"){
    img.src = "bark gif.gif";
    dog = dog+1;
  }
  else if(results[0].label == "Cat"){
    img.src = "meow.gif";
    cat = cat+1;
  }
  else{
    img.src = "ear.jpg";
  }
 }
}
