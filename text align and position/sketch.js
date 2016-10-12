function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  background(50);
  textSize(32);
  
  // baseline (default)
  fill(0, 255, 0);
  ellipse(200, 100, 10, 10);
  fill(255);
  textAlign(CENTER, BASELINE);
  text("1", 200, 100);
  
  // bottom
  fill(0, 255, 0);
  ellipse(200, 166, 10, 10);
  fill(255);
  textAlign(CENTER, BOTTOM);
  text("2", 200, 166);

  // center
  fill(0, 255, 0);
  ellipse(200, 233, 10, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text("3", 200, 233);

  // top
  fill(0, 255, 0);
  ellipse(200, 300, 10, 10);
  fill(255);
  textAlign(CENTER, TOP);
  text("4", 200, 300);
}