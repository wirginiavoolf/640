/*
Questions:

What does "i" & "for" mean in the loop code below? 
How can I add other variables/sequences to the loop array?

nltk.org
*/

var randomNoun = [];
var randomVerb = [];
var randomArticle = [];



var randomWord = [];

function setup() {
  
  createCanvas(500,500);
  

  randomNoun.push("Boy");
  randomVerb.push("is");
  randomArticle.push("the");

/*
  randomWord.push("Girl");
  randomWord.push("Boy");
  randomWord.push("is");
  randomWord.push("the");
  */
}

function draw() {
  
    for(var i = 0; i < 3; i++){
    text(randomArticle + randomNoun + randomVerb);
    console.log(print)
  }
  
  
  /*
  for(var i = 0; i < 3; i++){
    text(randomArticle[i], randomNoun[i], randomVerb[i], random(width), random(height));
  }
  */
  /*noun.pop(randomNum)
  Removes stuff from array randomly 
  */
}