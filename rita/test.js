var input;
var button;
var lexicon;

function setup() {
  noCanvas();
  lexicon = new RiLexicon();

  input = createInput('Not knowing when the dawn will come, I open every door.');
  button = createButton('submit');
  input.changed(processRita);
  button.mousePressed(processRita);
  input.size(400);
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
   if (/nn.*/.test(pos[i])) {
      var alliterations = lexicon.alliterations(words[i]);
      output += alliterations[Math.floor(Math.random() * alliterations.length)];
    } else {
      output += words[i];
    }

    output += " ";
  }
  createP(output);
}