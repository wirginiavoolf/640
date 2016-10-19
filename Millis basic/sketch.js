var prevMillis = 0;
var interval = 5000;

var counter = 0

function setup() {
  
}

function draw() {
  //console.log(millis());
  
  if(millis() - prevMillis > interval){
    prevMillis = millis();
    counter++;
    console.log(counter)
  }
}