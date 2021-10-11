var START= 0;
var PLAY = 1;
var END = 2;
var gameState = START;
function preload(){
  back1img = loadImage("back1.jpg");
  backimg = loadImage("back.jpg");
  playimg = loadImage("play.png")
  back2img = loadImage("back2.jpg");
}
function setup(){
createCanvas (windowWidth,windowHeight)
back1 = createSprite(windowWidth/2, windowHeight/2);
back1.addImage(back1img);
playBtn = createSprite(windowWidth/2 - 430, height - 250);
playBtn.addImage(playimg);
back2 = createSprite(windowWidth/2, windowHeight/2);
back2.addImage(back2img);
back2.visible = false;
}
function draw(){
background(180);
drawSprites();
if(gameState === START){
  if(mousePressedOver(playBtn)){
        back1.visible = false;
    playBtn.visible = false;
    back2.visible = true;
  }
}
}