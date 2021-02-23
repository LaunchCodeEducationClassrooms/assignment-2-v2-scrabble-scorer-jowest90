// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word: ");
   let word = input.question("Enter a word to score: ");
   console.log(oldScrabbleScorer(word));
};

let simpleScore = {
   1: ['A', 'E', 'I', 'O', 'U', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'Y']
};

let vowelBonusScore = {
  1: ['B', 'C', 'M', 'P', 'L', 'N', 'R', 'S', 'T','D', 'G','F', 'H', 'V', 'W', 'Y','K','J', 'X','Q', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

let scrabbleScore = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const scoringAlgorithms = [];

function scorerPrompt(algo,word) {
  
  word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {

    switch (algo) {
      //0 - Simple: One point per character
      case "0":
           for (const pointValue in simpleScore) {
 
		 if (simpleScore[pointValue].includes(word[i])) {
			// letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      //  scoringAlgorithms.push(pointValue);
      // letterPoints += scoringAlgorithms;
      letterPoints += parseInt(pointValue);
		 }//END IF
 
	  }//END FOR LOOP
          break;
          //2 - Scrabble: Uses scrabble point system
      case "1":
            for (const pointValue in vowelBonusScore) {
 
		 if (vowelBonusScore[pointValue].includes(word[i])) {
			// letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += parseInt(pointValue);
		 }//END IF
 
	  }//END FOR LOOP
          break;
          //0 - Simple: One point per character
      case "2":
            for (const pointValue in scrabbleScore) {
 
		 if (scrabbleScore[pointValue].includes(word[i])) {
			// letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += parseInt(pointValue);
		 }//END IF
 
	  }//END FOR LOOP
          break;
  }//END SWITCH
 
	}
	return letterPoints;
}

function transform() {};

let newPointStructure;

function runProgram() {
  //  initialPrompt();
    console.log("Let's play some scrabble! Enter a word: ");
   let word = input.question("Enter a word to score: ");
   let algo = input.question("Which scoring algorithm would you like to use?\n"
              +"\n"
              +"\n0 - Simple: One point per character"
              +"\n1 - Vowel Bonus: Vowels are worth 3 points"
              +"\n2 - Scrabble: Uses scrabble point system"
              +"\nEnter 0, 1, or 2: ");
  // scorerPrompt(algo,word);
  if(algo=="0"||algo=="1"||algo=="2"){
    console.log("Score for '"+word+"': "+scorerPrompt(algo,word));
  }else{
    console.log("INVALID NUM: ");
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

