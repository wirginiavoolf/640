var colorArray = ["black","red", "green", "blue", "orange", "purple"];
var currentRN = 0;
var currentColor = "black";
function setup() {
  createCanvas(400,500);
}

function draw() {
    console.log(currentColor);
    
    fill(currentColor);
    ellipse(mouseX, mouseY, 20,20);

}

function mousePressed(){
  /*
  //Hard Way:
  //Choosing a random number then using that number as array index
    //This one is good to use for multiple arrays that must correlate to each other (i.e. First Name + Last Name + Dob)
  currentRN = floor(random(0,colorArray.length));
  console.log(currentRN);
  currentColor = colorArray[currentRN];
  //console.log(currentColor);

  */
  
  
  /*
  Easy Way:
  */
  //Choosing a random array value
  //This one is good if total randomness is desired (i.e. Any First Name + Any Last Name + etc)
  currentColor = random(colorArray);
  console.log(currentColor);
  
}