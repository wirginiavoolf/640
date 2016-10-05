var sourceText1 = "he,asked,the,butterfly,whats,her,cocoon";
var wordsA = sourceText.split(",");
var sourceText2 = "wanted,what,operas,sing,no,colony,only"
var wods2 = sourceText.split(",")
function setup() {
  createCanvas(800, 800);
  noLoop();
}
function draw() {
  background(50);
  textSize(72);
  //push();
  //translate(mouseX, mouseY);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < wordsA.length; i++) {
    fill(random(255));
    text(wordsA[i], random(width), random(height));
 
 /*
  pop();
  translate(50,50)
    for (var i = 0; i < words2.length; i++) {
    fill(random(255));
    text(words2[i], random(width), random(height));
  
      */
      
    }
}