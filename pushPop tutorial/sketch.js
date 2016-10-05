
var centerX = 0;
var centerY = 0;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  
  for(var i = 0; i <= 100; i++){
    multiDrawing(random(width), random(height), random(0,2));
  }
  
}

function draw() {

  

  
  //translate is a transform function

//if you subtract the center values, it ties the image to the mouse 

//you need push & pops for all transform functions so that the canvas translates back to the original point
  


}

function multiDrawing (posX, posY, scaling){
  background(color('hsb(100, 10%, 100%)'));
  
    push();
  translate(posX -(centerX * scaling), posY -(centerY * scaling));
  scale(scaling);
  fill(255)
  strokeWeight(1);

  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10, centerY - 10, 10, 20);
  ellipse(centerX + 10, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);
  
  noFill();
  strokeWeight(4);
  arc(centerX,centerY,100,100, 0,PI)
  strokeWeight(30);
  arc(centerX,centerY,100,100, PI,TWO_PI)

  pop();
  
}