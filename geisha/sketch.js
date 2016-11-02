var firstLine = ["he", "asked", "the", "butterfly", "whats", "her", "cocoon"]
var secondLine = ["wanted", "what", "operas", "sing", "no", "colony", "only"]
var thirdLine = ["her", "soft", "larvae", "like", "patience", "but", "blushing"]
var fourthLine = ["rosy", "light", "in", "the", "wreckage", "with", "sugar"]
var fifthLine = ["blood", "wounds", "puccinis", "curdled", "fingers", "fucking", "sinew",]
var sixthLine = ["split", "her", "bedroom", "curtained", "shy", "flickering", "ready"]

/*nested array
var allLines = [["he", "asked", "the", "butterfly", "whats", "her", "cocoon"],
 ["wanted", "what", "operas", "sing", "no", "colony", "only"],
 ["her", "soft", "larvae", "like", "patience", "but", "blushing"],
 ["rosy", "light", "in", "the", "wreckage", "with", "sugar"],
 ["blood", "wounds", "puccinis", "curdled", "fingers", "fucking", "sinew",],
 ["split", "her", "bedroom", "curtained", "shy", "flickering", "ready"]]

allLines[0]

allLines[0][0]
*/
var slider; 



var PosX = 750;
var PosY = 80;

function setup() {
  createCanvas(800, 700);
  
  
  firstSlide = createSlider(0, 6, 0);
  firstSlide.position(PosX, PosY);
  
  
  secondSlide = createSlider(0, 6, 0);
  secondSlide.position(PosX, PosY + 100);
  
  thirdSlide = createSlider(0, 6, 0);
  thirdSlide.position(PosX, PosY + 200);
  
  fourthSlide = createSlider(0, 6, 0);
  fourthSlide.position(PosX, PosY + 300);
  
  fifthSlide = createSlider(0, 6, 0);
  fifthSlide.position(PosX, PosY + 400);
  
  sixthSlide = createSlider(0, 6, 0);
  sixthSlide.position(PosX, PosY + 500);
}


function flipOverArray (firstsliderValue,firstLine) {
  if(firstsliderValue >= firstLine.length){
    firstsliderValue = firstsliderValue - firstLine.length
  }
  return firstsliderValue
}

function flipOverArrayii (secondsliderValue,secondLine) {
  if(secondsliderValue >= secondLine.length){
    secondsliderValue = secondsliderValue - secondLine.length
  }
  return secondsliderValue
}

function flipOverArrayiii (thirdsliderValue,thirdLine) {
  if(thirdsliderValue >= thirdLine.length){
    thirdsliderValue = thirdsliderValue - thirdLine.length
  }
  return thirdsliderValue
}

function flipOverArrayiv (fourthsliderValue,fourthLine) {
  if(fourthsliderValue >= fourthLine.length){
    fourthsliderValue = fourthsliderValue - fourthLine.length
  }
  return fourthsliderValue
}

function flipOverArrayv (fifthsliderValue,fifthLine) {
  if(fifthsliderValue >= fifthLine.length){
    fifthsliderValue = fifthsliderValue - fifthLine.length
  }
  return fifthsliderValue
}

function flipOverArrayvi (sixthsliderValue,sixthLine) {
  if(sixthsliderValue >= sixthLine.length){
    sixthsliderValue = sixthsliderValue - sixthLine.length
  }
  return sixthsliderValue
}


function draw() {
  background(255);
  fill(0);
  textSize(24);
  textFont("Times New Roman");
  
  //first line
  var firstsliderValue = int(firstSlide.value());
  
  index_0 = flipOverArray(firstsliderValue + 0,firstLine)
  text(firstLine[index_0], 10, 80);
  
  index_1 = flipOverArray(firstsliderValue + 1,firstLine)
  text(firstLine[index_1], 110, 80);  
  text(firstLine[flipOverArray(firstsliderValue + 2,firstLine)], 210, 80);
  text(firstLine[flipOverArray(firstsliderValue + 3,firstLine)], 310, 80);
  text(firstLine[flipOverArray(firstsliderValue + 4,firstLine)], 410, 80);
  text(firstLine[flipOverArray(firstsliderValue + 5,firstLine)], 510, 80);
  text(firstLine[flipOverArray(firstsliderValue + 6,firstLine)], 610, 80);
  
  //second line
  var secondsliderValue = int(secondSlide.value());

  
  index_0 = flipOverArrayii(secondsliderValue + 0,secondLine)
  text(secondLine[index_0], 10, 180);
  
  index_1 = flipOverArrayii(secondsliderValue + 1,secondLine)
  text(secondLine[index_1], 110, 180);  
  text(secondLine[flipOverArrayii(secondsliderValue + 2,secondLine)], 210, 180);
  text(secondLine[flipOverArrayii(secondsliderValue + 3,secondLine)], 310, 180);
  text(secondLine[flipOverArrayii(secondsliderValue + 4,secondLine)], 410, 180);
  text(secondLine[flipOverArrayii(secondsliderValue + 5,secondLine)], 510, 180);
  text(secondLine[flipOverArrayii(secondsliderValue + 6,secondLine)], 610, 180);

  //third line
  var thirdsliderValue = int(thirdSlide.value());

  index_0 = flipOverArrayiii(thirdsliderValue + 0,thirdLine)
  text(thirdLine[index_0], 10, 280);
  
  index_1 = flipOverArrayiii(thirdsliderValue + 1,thirdLine)
  text(thirdLine[index_1], 110, 280);  
  text(thirdLine[flipOverArrayiii(thirdsliderValue + 2,thirdLine)], 210, 280);
  text(thirdLine[flipOverArrayiii(thirdsliderValue + 3,thirdLine)], 310, 280);
  text(thirdLine[flipOverArrayiii(thirdsliderValue + 4,thirdLine)], 410, 280);
  text(thirdLine[flipOverArrayiii(thirdsliderValue + 5,thirdLine)], 510, 280);
  text(thirdLine[flipOverArrayiii(thirdsliderValue + 6,thirdLine)], 610, 280);
  
  //fourth line
  var fourthsliderValue = int(fourthSlide.value());

  index_0 = flipOverArrayiv(fourthsliderValue + 0,fourthLine)
  text(fourthLine[index_0], 10, 380);
  
  index_1 = flipOverArrayiv(fourthsliderValue + 1,fourthLine)
  text(fourthLine[index_1], 110, 380);  
  text(fourthLine[flipOverArrayiv(fourthsliderValue + 2,fourthLine)], 210, 380);
  text(fourthLine[flipOverArrayiv(fourthsliderValue + 3,fourthLine)], 310, 380);
  text(fourthLine[flipOverArrayiv(fourthsliderValue + 4,fourthLine)], 410, 380);
  text(fourthLine[flipOverArrayiv(fourthsliderValue + 5,fourthLine)], 510, 380);
  text(fourthLine[flipOverArrayiv(fourthsliderValue + 6,fourthLine)], 610, 380);
  
  
  //fifth line 
    var fifthsliderValue = int(fifthSlide.value());

  index_0 = flipOverArrayiv(fifthsliderValue + 0,fifthLine)
  text(fifthLine[index_0], 10, 480);
  
  index_1 = flipOverArrayiv(fifthsliderValue + 1,fifthLine)
  text(fifthLine[index_1], 110, 480);  
  text(fifthLine[flipOverArrayiv(fifthsliderValue + 2,fifthLine)], 210, 480);
  text(fifthLine[flipOverArrayiv(fifthsliderValue + 3,fifthLine)], 310, 480);
  text(fifthLine[flipOverArrayiv(fifthsliderValue + 4,fifthLine)], 410, 480);
  text(fifthLine[flipOverArrayiv(fifthsliderValue + 5,fifthLine)], 510, 480);
  text(fifthLine[flipOverArrayiv(fifthsliderValue + 6,fifthLine)], 610, 480);
  
  //sixth line
  var sixthsliderValue = int(sixthSlide.value());

  index_0 = flipOverArrayiv(sixthsliderValue + 0,sixthLine)
  text(sixthLine[index_0], 10, 580);
  
  index_1 = flipOverArrayiv(sixthsliderValue + 1,sixthLine)
  text(sixthLine[index_1], 110, 580);  
  text(sixthLine[flipOverArrayiv(sixthsliderValue + 2,sixthLine)], 210, 580);
  text(sixthLine[flipOverArrayiv(sixthsliderValue + 3,sixthLine)], 310, 580);
  text(sixthLine[flipOverArrayiv(sixthsliderValue + 4,sixthLine)], 410, 580);
  text(sixthLine[flipOverArrayiv(sixthsliderValue + 5,sixthLine)], 510, 580);
  text(sixthLine[flipOverArrayiv(sixthsliderValue + 6,sixthLine)], 610, 580);


}