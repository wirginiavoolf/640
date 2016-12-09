var input;
var button;
var lexicon;

function setup() {
  noCanvas();
  lexicon = new RiLexicon();

  input = createInput('As I say a noun is the name of a thing.');
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
      if(alliterations.length == 0){
        output+=words[i];
      }else{
         output += alliterations[Math.floor(Math.random() * alliterations.length)];

      }
      console.log("noun");
      console.log(alliterations.length);
    } else if (/jj.*/.test(pos[i])) {
      var alliterations = lexicon.alliterations(words[i]);
      output += alliterations[Math.floor(Math.random() * alliterations.length)];
      console.log("adjective");
    } else if (/vb/.test(pos[i])) {
      var alliterations = lexicon.alliterations(words[i]);
      output += alliterations[Math.floor(Math.random() * alliterations.length)];
      console.log("verbs");
    }
    else {
      console.log(words[i]);
      output += words[i];
    }
    output += " ";
  }
  createP(output);

}


