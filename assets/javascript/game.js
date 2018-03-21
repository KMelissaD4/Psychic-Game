// JavaScript Document

//sets the possible key presses that will be utilized.
let alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//sets the initial value of wins and losses.
let wins = 0;

let losses = 0;

//game allows for 9 tries before resetting.
let guessesLeft = 9;

//array that logs/retains user guesses.
let guessesSoFar = [];

//generates a random letter to be guessed by user
let randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

console.log("Computer picked: " + randomLetter);
	
	// if key press is detected, change to lowercase
document.onkeypress = function(event) {
    var userGuess = event.key;
	
	if(!guessesSoFar.includes(userGuess)) {
		guessesSoFar.push(userGuess)
	}

	console.log("Computer picked: " + randomLetter);
	
    if(userGuess === randomLetter){
        wins++;
		reset();
   
	}else{
        guessesLeft--;
    }

    if(guessesLeft === 0){
        losses++;
		reset();
    }

    document.getElementById('wins').innerHTML = ("Wins: " + wins);
    document.getElementById('losses').innerHTML = ("Losses: " + losses);
    document.getElementById('guessesLeft').innerHTML = ("Guesses left: " + guessesLeft);
	document.getElementById('guessesSoFar').innerHTML = ("Guesses so far: " + guessesSoFar.join(", "));
};

function reset (){
 	guessesLeft = 9;
	guessesSoFar = [];
	randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
	
	document.getElementById('guessesLeft').innerHTML = ("Guesses left: " + guessesLeft);
	document.getElementById('guessesSoFar').innerHTML = ("Guesses so far: " + guessesSoFar.join);
};


