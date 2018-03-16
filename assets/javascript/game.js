// JavaScript Document

//sets the possible key presses that will be utilized.
var alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//sets the initial value of wins and losses.
var wins = 0;

var losses = 0;

//game allows for 9 tries before resetting.
var guessesLeft = 9;

//array that logs/retains user guesses.
var guessesSoFar = [];

//generates a random letter to be guessed by user
var randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

console.log("Computer picked: " + randomLetter);
	
	// if key press is detected, change to lowercase
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === randomLetter){
        wins++;
    }else{
        guessesLeft--;
    }

    if(guessesLeft === 0){
        losses++;
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;

};
