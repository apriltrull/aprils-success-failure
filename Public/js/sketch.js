var state;
var current_color;

var success_sounds;
var failure_sounds;

var success_images;
var failure_images;

function setup(){
  createCanvas(window.innerWidth.window.innerHeight);
  success_sound=loadSound('sounds/success.mp3');
  success_sound=loadSound('sounds/failure.mp3');

  imageMode(CENTER);

   success_image = loadImage('images/checkmark.svg');
   failure_image = loadImage('images/cross.svg');


}
 function draw(){
   background(color(0, 255, 0));

   if(state == "failure"){
       image(failure_image,width/2,height/2,200,200);
     }else if(state == "success"){
       image(success_image,width/2,height/2,200,200);
     }
 }



 function changeToSuccess(){
   current_color:color(F00);
   success_sound.play();
   failure_sound.stop();
   state='success';


 }

 function changeToFailure(){
   current_color:color(F0F);
   failure_sound.play();
   success_sound.stop();
   state='failure';


 }



 document.getElementById('Success').addEventListener('click', changeToSuccess);
 document.getElementById('Failure').addEventListener('click', changeToFailure);
