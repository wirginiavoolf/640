var firstLine = ["he", "asked", "the", "butterfly", "whats", "her", "cocoon"]
var secondLine = ["wanted", "what", "operas", "sing", "no", "colony", "only"]
var thirdLine = ["her", "soft", "larvae", "like", "patience", "but", "blushing"]
var fourthLine = ["rosy", "light", "in", "the", "wreckage", "with", "sugar"]
var fifthLine = ["blood", "wounds", "puccinis", "curdled", "fingers", "fucking", "sinew",]
var sixthLine = ["split", "her", "bedroom", "curtained", "shy", "flickering", "ready"]

var slider;


var PosX = 20;
var PosY = 20;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  
  
  firstSlide = createSlider(0, 7, 0);
  firstSlide.position(PosX, PosY);
  
  secondSlide = createSlider(0, 7, 0);
  secondSlide.position(20, PosY + 30);
  
  thirdSlide = createSlider(0, 7, 0);
  thirdSlide.position(PosX, PosY + 60);
  
  fourthSlide = createSlider(0, 7, 0);
  fourthSlide.position(PosX, PosY + 90);
  
  fifthSlide = createSlider(0, 7, 0);
  fifthSlide.position(PosX, PosY + 120);
  
  sixthSlide = createSlider(0, 7, 0);
  sixthSlide.position(PosX, PosY + 150);
}

/*
function mousePressed() {
    createP(firstLine);
}
*/

function draw() {
  background(50);
  fill(255);
  textSize(14);
  
  
  var firstsliderValue = int(firstSlide.value());
  text(firstLine[firstsliderValue], 0, 20);
  
  var secondsliderValue = int(secondSlide.value());
  text(secondLine[secondsliderValue], 0, 40);

  var sliderValue = int(thirdSlide.value());
  text(thirdLine[sliderValue], 0, 60);
  
  var sliderValue = int(fourthSlide.value());
  text(fourthLine[sliderValue], 0, 80);
  
  var sliderValue = int(fifthSlide.value());
  text(fifthLine[sliderValue], 0, 110);
  
  var sliderValue = int(sixthSlide.value());
  text(sixthLine[sliderValue], 0, 130);

}