var input;
var button1;
var lexicon;

function setup() {
  noCanvas();
  lexicon = new RiLexicon();

  input = createInput('As I say a noun is the name of a thing.');
  input.size(400);
  input.changed(processRita);

  button1 = createButton('steinify');
  //button = createButton('also submit');
  button1.mousePressed(processRita);



}

// function processRita1() {
// var s = input.value();
// var rs = new RiString(s);
// var words = rs.words();
// var pos = rs.pos();
// console.log(words);
// console.log(pos);

// var output = '';

// //rhymes
// for (var i = 0; i < words.length; i++) { 
//    if (/nn.*/.test(pos[i])) {
//       var rhymes = lexicon.rhymes(words[i]);
//       if(rhymes.length == 0){
//         output+=words[i];
//       }else{
//          output += rhymes[Math.floor(Math.random() * rhymes.length)];
//       }
//       //console.log("noun");
//       //console.log(rhymes.length);
//     } else if (/jj.*/.test(pos[i])) {
//       var rhymes = lexicon.rhymes(words[i]);
//       output += rhymes[Math.floor(Math.random() * rhymes.length)];
//       //console.log("adjective");
//     } else if (/vb/.test(pos[i])) {
//       var rhymes = lexicon.rhymes(words[i]);
//       output += rhymes[Math.floor(Math.random() * rhymes.length)];
//       //console.log("verbs");
//     } 
//     else {
//       //console.log(words[i]);
//       output += words[i];
//   } {
//        output += " ";
//   }
//   }
//   createP(output);

// }

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
  } {
       output += " ";
  }
  }
  createP(output);

}



/*
var output = '';
for (var i = 0; i < words.length; i++) { 
   if (/nn./.test(pos[i])) {
      var alliterations = lexicon.alliterations(words[i]);
      output += alliterations[Math.floor(Math.random() * alliterations.length)];
    } else {
      output += words[i];
    }

    output += " ";
  }



for (var i = 0; i < words.length; i++) { 
   if (/jj./.test(pos[i])) {
      var alliterations = lexicon.alliterations(words[i]);
      output += alliterations[Math.floor(Math.random() * alliterations.length)];
    } else {
      output += words[i];
    }

    output += " ";
  }
  createP(output);
}*/