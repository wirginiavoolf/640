function setup() {
  
}

function draw() {
  
}

function mousePressed() {
  //diceRoll(6); 
  
  //means each time you click the mouse, diceRoll function will happen 
  
  var currentRoll = diceRoll(6); 
  
  if(currentRoll == 3){
    console.log("You are the champion")
  }else{
    console.log("Another one")
  }
 
}

function diceRoll(diceSize) {
  //add parameters by typing in the paratheses 
  
  //console.log(int(random(1,diceSize +1))); 
  
  //int function is "typecasting," i.e. forcing it to be something else - in this case, decimal becomes integer 
  //add +1 so that the roll goes up to your maximum number defined in diceRoll 
  
  var curRoll = int(random(1,diceSize +1)); 
  return curRoll;
  
  //var creates information, return brings it back to the program
  //return is used to say "a function is done, here's the info"
  //goes back to previous function -- in this case, mousePress
}