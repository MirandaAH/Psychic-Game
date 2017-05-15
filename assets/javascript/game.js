

var letterList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var losses = 0;
var wins = 0;
var guessesLeft = 9;
var lettersGuessed = [];


startGame();


function restart (){
	guessesLeft = 9;
	lettersGuessed = [];
	startGame();
}

function startGame() {
	var computerGuess = letterList[Math.floor(Math.random() * letterList.length)];
	console.log(computerGuess);
	
	document.onkeypress = function(event) {
		
		var userGuess = event.key;

		if (guessesLeft != 0){
			if (userGuess === computerGuess) {
			wins++;		
			restart();
			}
			else if (userGuess != computerGuess) {
			guessesLeft--;
			lettersGuessed.push(userGuess);		
			}
		}
		if (guessesLeft === 0){
			losses++;
			restart();
		}	
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
	document.getElementById('losses').innerHTML= losses;
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('lettersGuessed').innerHTML= lettersGuessed.toString();
	};

};