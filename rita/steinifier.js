var input;
var button1;
var button2;
var lexicon;
var posX = 250;
var posY = 625;

function setup() {
  noCanvas();
  
  lexicon = new RiLexicon();

  input = createInput('As I say a noun is the name of a thing.');
  input.size(400);
  input.changed(processRita);
  input.position(posX, posY);

  button1 = createButton('rhyme');
  //button = createButton('also submit');
  button1.mousePressed(processRhyme);
  button1.position(posX + 401, posY);

  button2 = createButton('reason');
  //button = createButton('also submit');
  button2.mousePressed(processRita);
  button2.position(posX + 455, posY);





}

function processRhyme() {
var s = input.value();
var rs = new RiString(s);
var words = rs.words();
var pos = rs.pos();
console.log(words);
console.log(pos);

var output = '';

//rhymes
for (var i = 0; i < words.length; i++) { 

  if(words[i] == "." || words[i] == "," || words[i] == "?" || words[i] == "!"){
    output += words[i];
  }else{
    output += " ";
   if (/nn.*/.test(pos[i])) {
      var rhymes = lexicon.rhymes(words[i]);
      if(rhymes.length == 0){
        output+=words[i];
      }else{
         output += rhymes[Math.floor(Math.random() * rhymes.length)];
      }
      //console.log("noun");
      //console.log(rhymes.length);
    } else if (/jj.*/.test(pos[i])) {
      var rhymes = lexicon.rhymes(words[i]);
      output += rhymes[Math.floor(Math.random() * rhymes.length)];
      //console.log("adjective");
    } else if (/vb/.test(pos[i])) {
      var rhymes = lexicon.rhymes(words[i]);
      output += rhymes[Math.floor(Math.random() * rhymes.length)];
      //console.log("verbs");
    } 
    else {
      //console.log(words[i]);
      output += words[i];
  }

}

  
  }
  createP(output);

}

function processRita() {
var s = input.value();
var rs = new RiString(s);
var words = rs.words();
var pos = rs.pos();
console.log(words);
console.log(pos);

var output = '';

//alliterations
for (var i = 0; i < words.length; i++) { 

  if(words[i] == "." || words[i] == "," || words[i] == "?" || words[i] == "!"){
    output += words[i];
  }else{
    output += " ";
   if (/nn.*/.test(pos[i])) {
      var alliterations = lexicon.alliterations(words[i]);
      if(alliterations.length == 0){
        output+=words[i];
      }else{
         output += alliterations[Math.floor(Math.random() * alliterations.length)];
      }
      //console.log("noun");
      //console.log(alliterations.length);
    } else if (/jj.*/.test(pos[i])) {
      var alliterations = lexicon.alliterations(words[i]);
      output += alliterations[Math.floor(Math.random() * alliterations.length)];
      //console.log("adjective");
    } else if (/vb/.test(pos[i])) {
      var alliterations = lexicon.alliterations(words[i]);
      output += alliterations[Math.floor(Math.random() * alliterations.length)];
      //console.log("verbs");
    } 
    else {
      //console.log(words[i]);
      output += words[i];
  }

}

  
  }
  createP(output);

}