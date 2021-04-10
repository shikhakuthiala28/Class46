//DEFINING THE FRUIT VARIABLES.
var fruit, fruit1,fruit2,fruit3,fruit4;

//DEFINING ENEMY VARIABLES
var enemy;

//DEFINING RANDOM VARIAABLES
var random_fruit, random_enemy, random_funx, position_fruit;

//DEFINING KNIFE VARIABLES
var knife, knifeimg;

//DEFINING GAMEOVER VARIABLES
var gameOver, gameOverimg;

//DEFINING SCORE VARIABLE
var score;

//DEFINING THE GROUP VARIABLES
var fruitGroup, enemyGroup, knifeGroup;

//DEFINING GAMESTATE VARIABLES
var gameState="play";

//DEFINING SOUND VARIABLES
var knifeSound, gameOverSound;

// BACKGROUND IMAGE
var bgImage;

//DEFINING NEXT LEVEL SPRITE AND THE IMAGES
var nextLevel, nextlevelImg;

//DEFININF RESTART SPRITE AND IMAGE
var restart, restartImg;

//DEFINING LEVEL VARIABLE
var level=1; 

function preload(){
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  enemy1=loadAnimation("alien1.png","alien2.png");
  knifeimg=loadImage("sword.png");
  gameOverimg=loadImage("gameover.png");
  knifeSound=loadSound("knifeSwooshSound.mp3");
  gameOverSound=loadSound("gameover.mp3");
  bgImage=loadImage("bgimage.png");
  nextlevelImg=loadImage("nextlevel.jpg");
  restartImg=loadImage("restart.png");
 
}
function setup(){
  
  createCanvas(500,500);
  
  knife=createSprite(50,250,20,20);
  knife.addImage(knifeimg);
  knife.scale=0.7;
  
  gameOver=createSprite(250,250,20,20);
  gameOver.addImage(gameOverimg);
  gameOver.scale=0.7;
  gameOver.visible=false;
  
  nextLevel=createSprite(250,125,20,20);
  nextLevel.addImage(nextlevelImg);
  nextLevel.scale=0.7;
  nextLevel.visible=false;

  restart=createSprite(250,150,20,20);
  restart.addImage(restartImg);
  restart.scale=0.2;
  restart.visible=false;
  
  score=0;
  
  fruitGroup= new Group();
  enemyGroup= new Group();   
}

function draw(){
  
  background(bgImage);
  
  random_funx=Math.round(random(1,2));
  if(gameState=="play"){
  
  knife.x=World.mouseX;
  knife.y=World.mouseY;
  
  
    if(random_funx==1){
      fruit_display();
    }
    
    if(random_funx==2){  
      enemy_display();
    }
  if(fruitGroup.isTouching(knife)){
    knifeSound.play();
    fruitGroup.destroyEach();
    score=score+2;
  }
    
    if(enemyGroup.isTouching(knife)){
      knifeSound.play();
      gameState="end";
      enemyGroup.destroyEach();
    }

    if(score==20){
      nextLevel.visible=true;
      gameState="levelChange";
      level=level+1;
      
    }    
  }
  else if(gameState=="levelChange"){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    textSize(20);
    fill('red');
    text("Press Space Key To Start Next Level",85,250);
    noFill();
  }
  
  else if(gameState=="end"){
    
    gameOverSound.play();
    gameOver.visible=true;
    knife.visible=false;
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    restart.visible=true;
  }

  if(keyDown("space") && gameState=="levelChange"){
    nextLevel.visible=false;
    score=0;
    gameState="play";
  }
  if(mousePressedOver(restart)&& gameState=="end"){
    score=0;
    level=1;
    gameOver.visible=false;
    restart.visible=false;
    gameState="play";
  }

  textSize(20);
  fill('red');
  text("Score:"+score,400,50);
  noFill();

  textSize(20);
  fill('red');
  text("You are on level: "+level,325,75);
  noFill();

  drawSprites();
  

}

function fruit_display(){
 
  random_fruit=Math.round(random(1,4));
  position=Math.round(random(1,2));
  
  if (level==1){

    if(frameCount % 30==0){
      fruit=createSprite(Math.round(random(100,480)),0,20,20);
      fruit.velocityY=5;
      fruit.scale=0.2;
      fruit.lifetime=100;
      fruitGroup.add(fruit);
      
      switch(random_fruit){
        case 1: fruit.addImage(fruit1);
          break;
        case 2: fruit.addImage(fruit2);
          break;
        case 3: fruit.addImage(fruit3);
          break;
        case 4: fruit.addImage(fruit4);
          break;
       default:
          break;      
      }
      
      if(position==1){
        
        fruit.y=0;
        fruit.velocityY=(5+score/4);
        
      }
      else if(position==2){
        
        fruit.y=500;
        fruit.velocityY=-(5+score/4);
        
      }
    }
  }

  else if(level==2){

    if(frameCount % 25==0){
      fruit=createSprite(Math.round(random(100,480)),0,20,20);
      fruit.velocityY=5;
      fruit.scale=0.2;
      fruit.lifetime=100;
      fruitGroup.add(fruit);
      
      switch(random_fruit){
        case 1: fruit.addImage(fruit1);
          break;
        case 2: fruit.addImage(fruit2);
          break;
        case 3: fruit.addImage(fruit3);
          break;
        case 4: fruit.addImage(fruit4);
          break;
       default:
          break;      
      }
      
      if(position==1){
        
        fruit.y=0;
        fruit.velocityY=(5+score/4);
        
      }
      else if(position==2){
        
        fruit.y=500;
        fruit.velocityY=-(5+score/4);
        
      }
    }
  }

  else if(level==3){
    if(frameCount % 20==0){
      fruit=createSprite(Math.round(random(100,480)),0,20,20);
      fruit.velocityY=5;
      fruit.scale=0.2;
      fruit.lifetime=100;
      fruitGroup.add(fruit);
      
      switch(random_fruit){
        case 1: fruit.addImage(fruit1);
          break;
        case 2: fruit.addImage(fruit2);
          break;
        case 3: fruit.addImage(fruit3);
          break;
        case 4: fruit.addImage(fruit4);
          break;
       default:
          break;      
      }
      
      if(position==1){
        
        fruit.y=0;
        fruit.velocityY=(5+score/4);
        
      }
      else if(position==2){
        
        fruit.y=500;
        fruit.velocityY=-(5+score/4);
        
      }
    }
  }

  else if(level==4){

    if(frameCount % 15==0){
      fruit=createSprite(Math.round(random(100,480)),0,20,20);
      fruit.velocityY=5;
      fruit.scale=0.2;
      fruit.lifetime=100;
      fruitGroup.add(fruit);
      
      switch(random_fruit){
        case 1: fruit.addImage(fruit1);
          break;
        case 2: fruit.addImage(fruit2);
          break;
        case 3: fruit.addImage(fruit3);
          break;
        case 4: fruit.addImage(fruit4);
          break;
       default:
          break;      
      }
      
      if(position==1){
        
        fruit.y=0;
        fruit.velocityY=(5+score/4);
        
      }
      else if(position==2){
        
        fruit.y=500;
        fruit.velocityY=-(5+score/4);
        
      }
    }
  }

  else if(level==5){
    if(frameCount % 10==0){
      fruit=createSprite(Math.round(random(100,480)),0,20,20);
      fruit.velocityY=5;
      fruit.scale=0.2;
      fruit.lifetime=100;
      fruitGroup.add(fruit);
      
      switch(random_fruit){
        case 1: fruit.addImage(fruit1);
          break;
        case 2: fruit.addImage(fruit2);
          break;
        case 3: fruit.addImage(fruit3);
          break;
        case 4: fruit.addImage(fruit4);
          break;
       default:
          break;      
      }
      
      if(position==1){
        
        fruit.y=0;
        fruit.velocityY=(5+score/4);
        
      }
      else if(position==2){
        
        fruit.y=500;
        fruit.velocityY=-(5+score/4);
        
      }
    }
  }
  else{

    gameOverSound.play();
    gameOver.visible=true;
    knife.visible=false;
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    restart.visible=true;
    gameState="end";

  } 
  if(mousePressedOver(restart)&& gameState=="end"){
    score=0;
    level=1;
    gameOver.visible=false;
    restart.visible=false;
    gameState="play";
  } 
}

function enemy_display(){
  
  random_enemy=Math.round(random(1,2));
  if(frameCount%150==0)
    {
          enemy=createSprite(Math.round(random(100,480)),0,20,20);
    enemy.velocityY=5+score/10;
    enemy.scale=0.8;
    enemy.lifetime=250;  
    enemyGroup.add(enemy);
    enemy.addAnimation("enemy",enemy1);
     
    }
}
