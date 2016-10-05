var bubble0;

var bubbleArray = []; 

function setup() {
  createCanvas(400,400);
  bubble0 = new bubble(random(width), random(height), 100);
  
  //above variable will be passed down & used in function
  
  for(var i =0; i < 10; i ++){
    
    bubbleArray.push(new bubble(random(width), random(height), 100));
    
  }
}

function draw() {
  background(255);
  var curBubbleState = bubble0.check(mouseX,mouseY);
  console.log(curBubbleState);
  bubble0.check(mouseX, mouseY);
  bubble0.display(curBubbleState);
  bubble0.update(curBubbleState);
  //above makes bubble show up 
  
  for(var i = 0; i < bubbleArray.length; i++){
    var curBubbleState = bubbleArray[i].check(mouseX,mouseY);
    bubbleArray[i].display(curBubbleState);
    bubbleArray[i].update(curBubbleState);
  }
  
}

function bubble(tempX, tempY, tempSize){
  
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempSize;
  
  //this refers to initialized variable of bubble
  //every time you say "this," it refers back to initialized variable, i.e., "the current bubble"
  
  this.display = function(showHide){
    if(showHide == false){
      
    fill(100);
    ellipse(this.x,this.y,this.diameter,this.diameter);}
    
  }
  
  this.check = function(userX, userY){
    var curDist = dist(this.x,this.y, userX,userY);
    console.log(curDist);
    if(curDist < 50){
      console.log("hit");
      return true;
    }else{
      return false;
    }
  }

this.update = function(runUpdate){
  
  if(runUpdate == true){
  this.x = random(width);
  this.y = random(height);
  }
}

}