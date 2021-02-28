// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let word = '';

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
/*
function simple(word) {
  return word.length;
}

function vowelBonus(word) {
  let points = 0;

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i).match(/[aeiou]/gi)) {
      points += 3;

    } else {
      points += 1;
    }
  }
  return points;
}

function scrabble(word, newPointStructure) {
	return oldScrabbleScorer(word);
}
*/
let simpleScore = function(word){
  return word.length;
};

let vowelBonusScore =function(word){
  let points = 0;

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i).match(/[aeiou]/gi)) {
      points += 3;

    } else {
      points += 1;
    }
  }
  return points;
};

let scrabbleScore = function(word, newPointStructure){
	return oldScrabbleScorer(word);
};

const scoringAlgorithms = [Object({name: 'Simple Score',
                            description: 'Each letter is worth 1 point',
                            scoringFunction: simpleScore
                            }),
                            Object({name: 'Bonus Vowels',
                            description: 'Vowels are 3 pts, consonants are 1 pt.',
                            scoringFunction: vowelBonusScore
                            }),
                            Object({name: 'Scrabble',
                            description: 'The traditional scoring algorithm.',
                            scoringFunction: scrabbleScore
                            })];

function scorerPrompt() {

  console.log("Let's play some scrabble! Enter a word: ");
  word = input.question("Enter a word to score: ");
  let algo = input.question("Which scoring algorithm would you like to use?\n"
    + "\n"
    + "\n0 - Simple: One point per character"
    + "\n1 - Vowel Bonus: Vowels are worth 3 points"
    + "\n2 - Scrabble: Uses scrabble point system"
    + "\nEnter 0, 1, or 2: ");
  // scorerPrompt(algo,word);
  if (algo == "0" || algo == "1" || algo == "2") {
    // console.log("Score for '" + word + "': " + scorerPrompt(algo, word));
    // scorerPrompt(algo, word);
    switch (algo) {
      //0 - Simple: One point per character
      case "0":
        // console.log("Score for " + word +": "+`${simple(word)}`);
        console.log("algorithm name: ", scoringAlgorithms[0].name);
        console.log("algorithm description: ", scoringAlgorithms[0].description);
        console.log("Score for " + word +": "+`${simpleScore(word)}`);
        // console.log("algorithmscorerFunction: ", scoringAlgorithms[0].scorerFunction(word));
        break;
      //1- Vowel Bonus: Vowels are worth 3 point
      case "1":
        console.log("algorithm name: ", scoringAlgorithms[1].name);
        console.log("algorithm description: ", scoringAlgorithms[1].description);
        console.log("Score for " + word + ": " + `${vowelBonusScore(word)}`);
        break;
      //2 - Scrabble: Uses scrabble point system
      case "2":
        console.log("algorithm name: ", scoringAlgorithms[2].name);
        console.log("algorithm description: ", scoringAlgorithms[2].description);
        // console.log("Score for " + word +": "+`${scrabble(word)}`);
        console.log("Score for " + word +": "+scrabbleScore(word));
        break;
    }//END SWITCH
  } else {
    console.log("INVALID NUM: ");
  }

}

function transform(oldPointStructure) {
  let newPointStructure={};
 for(items in oldPointStructure){
   for (let i = 0; i < oldPointStructure[1].length; i++) {
    newPointStructure[`${oldPointStructure[1][i].toLowerCase()}`] = 1;
  }
  for (let i = 0; i < oldPointStructure[2].length; i++) {
    newPointStructure[`${oldPointStructure[2][i].toLowerCase()}`] = 2;
  }
  for (let i = 0; i < oldPointStructure[3].length; i++) {
    newPointStructure[`${oldPointStructure[3][i].toLowerCase()}`] = 3;
  }
  for (let i = 0; i < oldPointStructure[4].length; i++) {
    newPointStructure[`${oldPointStructure[4][i].toLowerCase()}`] = 4;
  }
  for (let i = 0; i < oldPointStructure[5].length; i++) {
    newPointStructure[`${oldPointStructure[5][i].toLowerCase()}`] = 5;
  }
  for (let i = 0; i < oldPointStructure[8].length; i++) {
    newPointStructure[`${oldPointStructure[8][i].toLowerCase()}`] = 8;
  }
  for (let i = 0; i < oldPointStructure[10].length; i++) {
    newPointStructure[`${oldPointStructure[10][i].toLowerCase()}`] = 10;
  }
 }
 return newPointStructure;
};

let newPointStructure=transform(oldPointStructure);

function runProgram() {
  // console.log(oldPointStructure);
  // initialPrompt();
  scorerPrompt();
  // console.log(newPointStructure);
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

