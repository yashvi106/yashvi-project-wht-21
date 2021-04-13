var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here

    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(700,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue"; 

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
// music loading 



    //create two more blocks i.e. block3 and block4here

block3 = createSprite(455 ,580, 190, 30)
block3.shapeColor = "purple"

block4 = createSprite( 600 , 580 , 195,30)
block4.shapeColor = "pink"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
 ball.velocityX = 2
ball.velocityY = 2

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

if (block1.isTouching(ball)&& ball.bounceOff(block1)) {
    ball.shapeColor =  "blue";
    ball.velocityX = 0
    ball.velocityY = 0
   music.stop();
}

if (block2.isTouching(ball)&& ball.bounceOff(block2)) {
    ball.shapeColor =  "orange";
   music.play();
    console.log("hi");
}

if (block3.isTouching(ball)&& ball.bounceOff(block3)) {
    ball.shapeColor =  "purple";
    music.play();
   
}



if (block4.isTouching(ball)&& ball.bounceOff(block4)) {
    ball.shapeColor =  "pink"
    music.play();
}
    drawSprites();
}
 