var wordSlide;
var words = ["hello", "goodbye", "red", "green", "blue"];
 
function setup() {
  wordSlide = createSlider(0, 4, 0);
  wordSlide.position(20, 20);
}
 
function draw() {
  background(255);
  var sliderValue = int(wordSlide.value());
 
  text(words[sliderValue], 0, height/2);
 
}