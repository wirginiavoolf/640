function setup() {
  createCanvas(1000, 1000);
  noLoop();
}
function draw() {
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();



  for (var i = 0; i < 20; i++) {
    push();
    translate(width/2, i*100);
    firstVerse();
    pop();
  }
  
    // small
  push();
  translate(30, 20);
  scale(0.5);
  firstVerse();
  pop();

  // regular
  push();
  translate(30, 100);
  scale(1); // 1 is the default
  firstVerse();
  pop();

  // large
  push();
  translate(30, 250);
  scale(2);
  firstVerse();
  pop();
  
  push();
  translate(30, 350);
  scale(1); // 1 is the default
  firstVerse();
  pop();
  

}

function firstVerse() {
  
  textSize(100);
  textFont("Helvetica");
  text("repetition", 10, 30);
  fill(0, 102, 153);

}

function secondVerse() {
  
  textSize(100);
  textFont("Helvetica");
  text("repeats", 10, 30);
  fill(0, 102, 153);

}

