
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  ground=createSprite(300,180,600,50)
  trex=createSprite(30,180,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  //create a trex sprite
 invisibleground=createSprite(300,185,600,50)

}

function draw(){
  background("grey")
  if(keyDown("space")){
    trex.velocityY=-12;
  }
trex.velocityY=trex.velocityY+0.9;
  drawSprites();
  

}