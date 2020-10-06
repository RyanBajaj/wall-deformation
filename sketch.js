var bullet;
var wall;
var speed;
var thickness;
var weight;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor="white";
  speed=random(223,321);
  bullet.velocityX=speed;
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor="coral";
 
  weight=random(30,52);
  bullet.depth=wall.depth+1;
  thickness=random(22,83);
 


}

function draw() {
  background(0,0,0);  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var  deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
  }
  if(deformation>10 ){
    bullet.shapeColor="red";
  }
  if(deformation<10){
    bullet.shapeColor="green";
  }
  

  

   

  drawSprites();
}