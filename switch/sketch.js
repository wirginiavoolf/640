var counter = 0;

function setup() {
  
}

function draw() {
  
  switch(counter){
    
    case 1:
      fill(0);
      break
      
    case 2:
      fill(255,0,0);
      break
      
    case 3:
      fill(0,255,0);
      break
    
    default:  //similar to an else statement
      fill(255);
      break
    
  }
  rectMode(CENTER);
  rect(0,0,50,50)
}

function mousePressed(){
  counter++;
}