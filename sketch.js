
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstaceImage;
var FoodGroup, obstacleGroup;
var banana,bananaImage,obstacle,obstaceImage,food;
var score,survivalTime;

var survivalTime=0;
var score=0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
                      
  

  
}


function draw() {
  background(180);
 stroke("black");
    fill("black");
      textSize(20);
  text("Score:"+  score, 300, 100);
    stroke("black");
    fill("black");
      textSize(20);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survial Time: "+ survivalTime, 100, 50);
  monkey.collide(ground);
  //monkey.collide(obstacleGroup);
   if(ground.x<0){
    ground.x=width/2;
  }
  
  
 
   if(keyDown("space")) {
        monkey.velocityY = -12;
    
    }
   monkey.velocityY = monkey.velocityY + 0.8;
  
  
  if(obstacleGroup. isTouching (monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
   FoodGroup.destroyEach();
   // obstacleGroup.destroyEach();
    
    
  }
  
  
  food();
  obstacles();
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1;
    
  }

  drawSprites();
}
    
  
  

  

function  food() {
  if(frameCount%80===0){
    banana=createSprite(500,350,40,10);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifeTime=200;
    FoodGroup.add(banana);
    
  }
  
  
}
function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(600,325,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.1 ;
     obstacleGroup.add(obstacle);
  }

}
  
