
var monkey , monkey_running,animal;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstaclesGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  var survivalTime=0;
  
  ground=createSprite(400,350,900,10);
ground.velocityX=-2;
console.log(ground.x);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  //console.log(monkey.y=Math.round(random(1,315)));
  
  foodGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
  background("blue");

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.y=monkey.y+0.8;
  
   monkey.collide(ground);
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    foodGroup.setVelocityEach(0);
    obstaclesGroup.setVelocityEach(0);
    foodGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
  }
  
 bananas();
  obstacles();
    
  text("tillu",monkey.x,monkey.y);
  
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,300,10);
  
  drawSprites();
}


function bananas(){
if(frameCount%80===0){
  banana=createSprite(600,250,40,10);
  banana.addImage("moving",bananaImage);
  banana.scale=0.5;
  banana.y=Math.round(random(120,200));
  banana.velocityX=-2;
  banana.lifetime=300;
  monkey.depth=banana.depth+1;
  foodGroup.add(banana);
}  
}
function obstacles(){
if(frameCount%80===0){
 obstacle=createSprite(600,250,40,10);
  obstacle.addImage("moving",obstacleImage);
  obstacle.scale=0.5;
obstacle.velocityX=-6;
 obstacle.lifetime=300;
  obstaclesGroup.add(banana);
}  
}



