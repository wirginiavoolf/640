var input;
var button;
var lexicon;

function setup() {
  noCanvas();
  lexicon = new RiLexicon();
  
  input = createInput('It was a dark and stormy night.');
  button = createButton('submit');
  input.changed(processRita);
  button.mousePressed(processRita);
  input.size(200);
}

function processRita() {
var s = input.value();
var rs = new RiString(s);
var words = rs.words();
var pos = rs.pos();
console.log(words);
console.log(pos);

var output = '';
for (var i = 0; i < words.length; i++) { 
  if (pos[i] === 'nn') {
    output += lexicon.random('nn');
  }else {
  output += words[i];
}
output += " ";
createP(output);
}
}