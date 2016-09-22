/*

var randomNoun = [];
var randomVerb = [];
var randomArticle = [];


*/

var randomWord = [];

function setup() {
  
  createCanvas(500,500);
  
  /*
  randomNoun.push("Girl");
  randomNoun.push("Boy");
  randomVerb.push("is");
  randomArticle.push("the");
*/

  randomWord.push("Girl");
  randomWord.push("Boy");
  randomWord.push("is");
  randomWord.push("the");
  
}

function draw() {
  for(var i = 0; i < randomWord.length; i++){
    text(randomWord[i], random(width), random(height));
  }
}