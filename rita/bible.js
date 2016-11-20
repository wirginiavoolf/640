var origin;
var bible;
var verse;
var sentence = [];
var special = [];
var lexicon;

function gotBible(d){
		verse = "In the beginning God created the heaven and the Earth";
	console.log(verse);
	// create a paragraph with a verse from the bible
	//origin = createP(verse);
	//origin.addClass('text');
	
	/* analyzing the result*/
	var rs = new RiString(verse);
	var rsPOS = rs.pos();
	console.log(rsPOS)
	
	// splitting the paragraph and print span around the word
	var words = rs.split(' ');

	words.forEach(function(w){
		var span = this.html = "<span>" + w._text + "</span> ";
		sentence += span;
		//console.log(sentence)
		return sentence;
	});
	// create a special paragraph divided in spans
	createP(sentence).addClass('text');
	var par = select('.text').elt.innerText;
	for (i = 0; i < 1000; i++){
		createSpan(par).parent('bg');
	}
			 
}

function changeWord(i) {
	// analyzing all words
	console.log(this);

	var specialW = new RiString(this.elt.childNodes["0"].data);
	var role = specialW.pos();
	var newWord = lexicon.randomWord(role["0"]);
	
	this.html(newWord);
	console.log(this);

	backgroundText();
}



function preload(){
	// Load the Bible as a JSON file
	//bible = loadJSON("https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json", gotBible);
	
	lexicon = new RiLexicon();
	
}

function backgroundText () {
	var par = select('.text').elt.innerText;
	var bg = select('#bg');
	console.log(par)
	
	for (i = 0; i < 1000; i++){
		createSpan(par).parent('bg');
	}
}

function setup() {
	noCanvas();
	// set the body background 
	//document.body.style.background = "#FF7C38";
	gotBible();
	//backgrounText();
	//special = document.getElementsByTagName("span");
	special = selectAll("span");
	for (i = 0; i < special.length; i++){
		special[i].mousePressed(changeWord);
		console.log(changeWord);
	}
	
}
