
//declaring variables.
var sea,ship;
var seaImg,shipImg;

function preload(){

  //loading the images for ship and sea to give animation.
  seaImg  = loadImage("sea.png");
  shipImg = loadAnimation("sea.png")

//loading animation for ship.
  shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  
}

function setup(){
  
  //creating canvas.
  createCanvas(400,400);

  //Setting background.
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  // creating ship
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);

  // making sea to move
  sea.velocityX = -3;
      
  drawSprites();
}
