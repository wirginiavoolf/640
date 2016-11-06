var input;
var button;

var lexicon;

function setup() {
	noCanvas();
	lexicon = new RiLexicon();

	input = createInput('It was a dark and stormy night');
	button = createButton('submit');
	input.changed(processRita);
	button.mousePressed(processRita);
	input.size(200);


}

function processRita(){

	var s = input.value();
	var rs = new RiString(s);
	var words = rs.words();
	var pos = rs.pos();
	console.log('words');
	console.log('pos');
	createP(s);

	var output = '';
	for (var i = 0; i < words.length; i++) { 
		if (/nn.*/.test(pos[i])) { 
			output += lexicon.randomWord(pos[i];

		} else {
		output += words[i];
		output += " "; //adds a space
	}
	createP(output);
}