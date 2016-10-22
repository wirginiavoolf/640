var firstLine = ["he", "asked", "the", "butterfly", "whats", "her", "cocoon"]
var secondLine = ["wanted", "what", "operas", "sing", "no", "colony", "only"]
var thirdLine = ["her", "soft", "larvae", "like", "patience", "but", "blushing"]
var fourthLine = ["rosy", "light", "in", "the", "wreckage", "with", "sugar"]
var fifthLine = ["blood", "wounds", "puccinis", "curdled", "fingers", "fucking", "sinew",]
var sixthLine = ["split", "her", "bedroom", "curtained", "shy", "flickering", "ready"]

var slider;



var PosX = 10;
var PosY = 460;

function setup() {
  createCanvas(1000, 1000);
  
  
  firstSlide = createSlider(0, 6, 0);
  firstSlide.position(PosX, PosY);
  
  
  secondSlide = createSlider(0, 6, 0);
  secondSlide.position(PosX + 140, PosY);
  
  thirdSlide = createSlider(0, 6, 0);
  thirdSlide.position(PosX + 280, PosY);
  
  fourthSlide = createSlider(0, 6, 0);
  fourthSlide.position(PosX + 420, PosY);
  
  fifthSlide = createSlider(0, 6, 0);
  fifthSlide.position(PosX + 560, PosY);
  
  sixthSlide = createSlider(0, 6, 0);
  sixthSlide.position(PosX + 700, PosY);
}


function flipOverArray (firstsliderValue,firstLine) {
  if(firstsliderValue >= firstLine.length){
    firstsliderValue = firstsliderValue - firstLine.length
  }
  return firstsliderValue
}

//forloop

function draw() {
  background(255);
  fill(0);
  textSize(24);
  textFont("Times New Roman");
  
  var firstsliderValue = int(firstSlide.value());
  
  index_0 = flipOverArray(firstsliderValue + 0,firstLine)
  text(firstLine[index_0], 0, 80);
  
  index_1 = flipOverArray(firstsliderValue + 1,firstLine)
  text(firstLine[index_1], 100, 80);  
  
  // text(firstLine[flipOverArray(firstsliderValue + 1,firstLine)], 100, 80);
  text(firstLine[flipOverArray(firstsliderValue + 2,firstLine)], 200, 80);
  text(firstLine[flipOverArray(firstsliderValue + 3,firstLine)], 300, 80);
  text(firstLine[flipOverArray(firstsliderValue + 4,firstLine)], 400, 80);
  text(firstLine[flipOverArray(firstsliderValue + 5,firstLine)], 500, 80);
  text(firstLine[flipOverArray(firstsliderValue + 6,firstLine)], 600, 80);
  
  /*
  var secondsliderValue = int(secondSlide.value());
  text(secondLine[secondsliderValue], 20, 140);

  var sliderValue = int(thirdSlide.value());
  text(thirdLine[sliderValue], 20, 200);
  
  var sliderValue = int(fourthSlide.value());
  text(fourthLine[sliderValue], 20, 260);
  
  var sliderValue = int(fifthSlide.value());
  text(fifthLine[sliderValue], 20, 320);
  
  var sliderValue = int(sixthSlide.value());
  text(sixthLine[sliderValue], 20, 380);
*/

}