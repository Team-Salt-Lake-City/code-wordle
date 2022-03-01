'use strict';
// This page will contain the functions for use within app.js.

// ------------ FUNCTIONS ------------------

/*

This function checks for existing game play results within local storage.
If results
access them, so counters are incremented correctly on game win or lose.

else no results,
instantiate new results object to increment on game win or lose.

*/
//DOM window for winOrLose
let endGameAlert = document.getElementById('alert-container');

//local storage use
let parsedResults = JSON.parse(localStorage.getItem('storedResults'));

if(parsedResults) {
  let results = parsedResults
}
else {
  let results = {
    roundsPlayed: 0,
    roundsWon: 0,
    winPercent: (this.roundsPlayed / this.roundsWon) * 100,
    currentStreak: 0,
    bestStreak: 0,
}

// TODO: generate a random number in relation to the length of the words array.
function randIndexGenerator() {

}

// this function will call randIndexGenerator and use return to get word for round of play.
// TODO: get function to return a word for game play.
function wordSelector() {

}

// this function checks if the users word EXACTLY matches the selected word.
// TODO: get function to check that index and content of guess word === selected word
function wordCheck() {

}

// this function checks if any of the letters in the guess match the selected word, and calls the function to check its index
// TODO: should check using .includes if letter in guess === letter in word, than calls indexcheck on that letter than yellowletter or greenletter.
function letterCheck() {

}

// this function will compare the index location of correct guessed letter vs word letter and turn board and keyboard green if match.
// TODO: should check index location of guessed letter against word. and call greenLetter if both true.
function indexCheck() {

}

// turns letter on board and keyboard yellow if letter in word but not in correct index
// TODO: should perform DOM manipulation to change styling of letter on board and keyboard << --- by adding a style class to both keyboard and game board item
function yellowLetter() {

}

// turns letter on board and keyboard green if letter in word and in correct index
// TODO: should perform DOM manipulation to change styling of letter on board and keyboard << by adding style class to both keyboard and game board items in html
function greenLetter() {

}

// turns letter on keyboard dark color and disables letter button on keyboard.
// TODO:
function wrongLetter(){

}

// function sets data into local storage
// TODO: get data and stringify it.
// TODO: setItem with key and value.
function setToLocalStorage() {
  let storedResults = JSON.stringify(results);
  localStorage.setItem('storedResults', storedResults);
}

// this function handles the win/lose conditions
// TODO: should display word, and description
// TODO: should increment counters/winstreak/currentStreak
// TODO: should popup with play again or go to results page options.
// TODO: on lose should reset currentStreak to zero
function winOrLose() {

  //display word and description - need logic from wordSelector() for currentWord and currentDesc
  let h3Elem = document.createElement('h3');
  h3Elem.textContent = currentWord;
  endGameAlert.appendChild(h3Elem);
  let pElem = document.createElement('p');
  pElem.textContent = currentDesc;
  endGameAlert.appendChild(pElem);

  //increment roundsPlayed
  results.roundsPlayed++;

  //increments roundsWon if the player won the round and set currentSteak to 0 if lost- need logic from check functions
  if(won) {
    results.roundsWon++;
    results.currentStreak++;
  }
  else {
    results.currentStreak = 0;
  }

  //checks currentSteak against best Streak
  if (results.currentStreak > results.bestStreak) {
    results.bestSteak = results.currentStreak;
  }

  //play again button
  let playAgainButton = document.createElement('button');
  playAgainButton.textContent = 'Play Again';
  endGameAlert.appendChild(playAgainButton);

  //view results button
  let resultsButton = document.createElement('button');
  resultsButton.textContent = 'Results';
  endGameAlert.appendChild(resultsButton);

}

// ------------ EVENT HANDLERS -------------

// places letter on board when user selects letter on keyboard.
// TODO: Takes in selected letter from on screen keyboard, displays it on game board.
function placeLetter(event) {

}

// removes letter from board when user pressed delete button on keyboard.
// TODO: removes last letter added to game board when delete button is pressed.
function removeLetter(event) {

}

// gets users guess from index.html and passes to the processing functions < triggered by user pressing enter or submit button on game board.
// TODO: save users guess letters.
// TODO: place all letters in a Array.
// TODO: returns that guess variable for other functions to use.
function userGuess(event) {

}
