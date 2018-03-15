// JavaScript Document

//sets the possible key presses that will be utilized.
let alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//sets the initial value of wins and losses.
var wins = 0;

var losses = 0;

//game allows for 9 tries before resetting.
var guessesLeft = 9;

//array that logs/retains user guesses.
var guessesSoFar = [];

//this is the letter choice of the user.
var userGuess = null;

//generates a random letter to be guessed by user
var randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

console.log("Wins: " + wins + " Losses: " + losses + " Guesses remaining: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + randomLetter);

document.onkeyup = function(event) {
	
	// if key press is detected, change to lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	/* if guess is unique and within the alphabetLetters array, add to the array guessesSoFar.*/
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		
		// guess is unique but incorrect, decrease guessesLeft by increment of 1.
		guessesLeft--;
	}

	/* if random selection matches user selection, record as a win. reset guessesLeft, clear guessesSoFar, randomly select a new letter. */
	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	/* it's logged as a loss in the guessesLeft burns down to 0. reset guessesLeft, clear the guessesSoFar, randomly select a new letter. */
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>I am thinking of a letter, guess which one?</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";

	document.querySelector("#game").innerHTML = html;
}