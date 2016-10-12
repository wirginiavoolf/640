var firstLine = "he asked the butterfly whats her cocoon";
var secondLine = "wanted what operas sing no colony only"
var thirdLine = "her soft larvae like patience but blushing"
var fourthLine = "rosy light in the wreckage with sugar"
var fifthLine = "blood wounds puccinis curdled fingers fucking sinew"
var sixthLine = "split her bedroom curtained shy flickering ready"
var curIndex = 0

function setup() {
  createCanvas(400, 800);
  frameRate(10);
}

function draw() {
  background(50);
  fill(255);
  textSize(14);
  textAlign(LEFT, CENTER);
  textLeading(100); 
  text(firstLine, 10, 100);
  text(secondLine, 10, 200);
  text(thirdLine, 10, 300);
  text(fourthLine, 10, 400);
  text(fifthLine, 10, 500);  
  text(sixthLine, 10, 600);

}