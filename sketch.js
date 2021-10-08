var player,playerImg;
var enemies,enemyAnimation;
var bullet,bulletImg;
var bulletGrp
var bckground,bckgroundImg;
var count = 0;


function preload(){
 playerImg = loadImage("Player.png");
 enemyAnimation = loadAnimation("EnemySoldier1.png","EnemySoldier2.png","EnemySoldier3.png");
 bulletImg = loadImage("Bullet.png");
 bckgroundImg = loadImage("Background.JPG");
}

function setup(){
createCanvas(windowWidth,windowHeight);
bckground = createSprite(width/2,height/2,width,height);
bckground.addImage(bckgroundImg);
bckground.scale = 3;

player = createSprite(width/4-250,height-400,20,20);
player.addImage(playerImg);
player.scale = 0.2;

bulletGrp = new Group();
enemyGrp = new Group();

rectMode(CENTER);
}

function draw(){
background("white");
Enemy();
player.y = mouseY;

if(keyDown("space")){
  Bullet();
}

if(bulletGrp.isTouching(enemyGrp)){
  enemies.destroy();
  bulletGrp.destroyEach();
  count += 1;
}

console.log(mouseY);

if(player.y<height/2 - 65){
  player.y = height/2 - 65;
}
drawSprites();

fill("black");
textSize(30);
text("Kills = " + count,20,33);
}

function Enemy(){
  if(frameCount%120===0){
    enemies = createSprite(width,random(height/2 - 65,height-20),20,20);
    enemies.addAnimation("ENEMY",enemyAnimation);
    enemies.scale = 0.3;
    enemies.velocityX = -1;
    enemies.lifetime = 1400;
    enemyGrp.add(enemies);
  }
}

function Bullet(){
  if(frameCount%5 ===0){
  bullet = createSprite(width/2,height/2,20,20);
  bullet.addImage(bulletImg);
  bullet.scale = 0.015;
  bullet.y = player.y - 53;
  bullet.x = player.x + 75;
  bullet.velocityX = 5;
  bullet.lifetime = 1400;
  bulletGrp.add(bullet);
  }

}


