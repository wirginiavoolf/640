

var topBoundary = 0;
var bottomBoundary = 0;

//Initialization:

var boundary0 = 0; 
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var boundary5 = 0;
var boundary6 = 0;

//Everything set to 0 in order to have control over width/height of canvas

var buttonSize = 100;

var brushSize = 10;

var brushColor = "black";

var currentArea = "";

var colorArray = ["black","red", "green", "blue", "orange", "purple"];


function setup() {
  createCanvas(900,500);
  
  topBoundary = 400;
  bottomBoundary = height; //or 500
  
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = 400;
  boundary5 = 500;
  boundary6 = 600;
  boundary7 = 700;
  boundary8 = 800;
  boundary9 = width;
  

  

  
  //Boundaries could also be set in an array 
  
  
  noStroke();
  
}

function draw() {

fill("green");
rect(boundary0,topBoundary,buttonSize,buttonSize);
fill("red");
rect(boundary1,topBoundary,buttonSize,buttonSize);
fill("blue");
rect(boundary2,topBoundary,buttonSize,buttonSize);
fill("yellow");
rect(boundary3,topBoundary,buttonSize,buttonSize);
fill("orange");
rect(boundary4,topBoundary,buttonSize,buttonSize);
fill("purple");
rect(boundary5,topBoundary,buttonSize,buttonSize);
fill("white");
rect(boundary6,topBoundary,buttonSize,buttonSize);
fill("black");
text("plus", 650, 450, 100, 100);
fill("white");
rect(boundary7,topBoundary,buttonSize,buttonSize);
fill("black");
text("minus", 750, 450, 100, 100);
fill("white");
rect(boundary8,topBoundary,buttonSize,buttonSize);
fill("black");
text("random", 850, 450, 100, 100);

//"Nested If Statement" - if statement within an if statement 
//This one determines where your mouse is within an area
  
  if(mouseY > topBoundary && mouseY < bottomBoundary){
    //console.log("color picker area")
    if(mouseX > boundary0 && mouseX < boundary1){
      //console.log("area1");
      currentArea = "area1"
    }else if(mouseX > boundary1 && mouseX < boundary2){
      //console.log("area 2");
      currentArea = "area2"
    }else if(mouseX > boundary2 && mouseX < boundary3){
      //console.log("area 3");
      currentArea = "area3"
    }else if(mouseX > boundary3 && mouseX < boundary4){
      //console.log("area 4");
      currentArea = "area4"
    }else if(mouseX > boundary4 && mouseX < boundary5){
      //console.log("area 5");
      currentArea = "area5"
     }else if(mouseX > boundary5 && mouseX < boundary6){
      //console.log("area 6");
      currentArea = "area6"
  }else if(mouseX > boundary6 && mouseX < boundary7){
    console.log("area7")
    currentArea = "area7"
  }else if(mouseX > boundary7 && mouseX < boundary8){
    console.log("area8")
    currentArea = "area8"
  }else if(mouseX > boundary8 && mouseX < boundary9){
    console.log("area9")
    currentArea = "area9"
  }
  }else{
    currentArea = "";
  }


  fill(brushColor);
  ellipse(mouseX,mouseY, brushSize, brushSize);
  
}


function mousePressed(){
 console.log(currentArea); 
 
 if(currentArea == "area1"){
   brushColor = "green";
}else if(currentArea == "area2"){
  brushColor = "red";
}else if(currentArea == "area3"){
  brushColor = "blue";
}else if(currentArea == "area4"){
  brushColor = "yellow";
}else if(currentArea == "area5"){
  brushColor = "orange";
}else if(currentArea == "area6"){
  brushColor = "purple";
}
else if(currentArea == "area7"){
brushSize++;
}else if(currentArea == "area8"){
brushSize--;
if(brushSize <= 1){brushSize = 1}
}else if(currentArea == "area9"){
  //random color selection
  brushColor = random(colorArray);
}

else{
  brushColor = "black";
}


}