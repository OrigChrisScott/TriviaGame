var gameOn = null;

// gameData object holds all game objects and coresponding questions, options, and answers
var gameData = {
	simpsons: [
		{
			question: "simpsons test question #1",
			options: ["simpsons option 1a", "simpsons option 1b (correct)", "simpsons option 1c", "simpsons option 1d"],
			answer: "simpsons option 1b (correct)"
		},

		{
			question: "simpsons test question #2",
			options: ["simpsons option 2a (correct)", "simpsons soption 2b", "simpsons option 2c", "simpsons option 2d"],
			answer: "simpsons option 2a (correct)"
		},

		{
			question: "simpsons test question #3",
			options: ["simpsons option 3a", "simpsons option 3b", "simpsons option 3c (correct)", "simpsons option 3d"],
			answer: "simpsons option 3c (correct)"
		},
		{
			question: "simpsons test question #4",
			options: ["simpsons option 4a", "simpsons option 4b", "simpsons option 4c", "simpsons option 4d (correct)"],
			answer: "simpsons option 4d (correct)"
		},
		{
			question: "simpsons test question #5",
			options: ["simpsons option 5a", "simpsons option 5b", "simpsons option 5c", "simpsons option 5d (correct)"],
			answer: "simpsons option 5d (correct)"
		},
		{
			question: "simpsons test question #6",
			options: ["simpsons option 6a (correct)", "simpsons option 6b", "simpsons option 6c", "simpsons option 6d"],
			answer: "simpsons option 6a (correct)"
		},
		{
			question: "simpsons test question #7",
			options: ["simpsons option 7a", "simpsons option 7b", "simpsons option 7c", "simpsons option 7d (correct)"],
			answer: "simpsons option 7d (correct)"
		},
		{
			question: "simpsons test question #8",
			options: ["simpsons option 8a", "simpsons option 8b (correct)", "simpsons option 8c", "simpsons option 8d"],
			answer: "simpsons option 8b (correct)"
		},
		{
			question: "simpsons test question #9",
			options: ["simpsons option 9a", "simpsons option 9b", "simpsons option 9c (correct)", "simpsons option 9d"],
			answer: "simpsons option 9c (correct)"
		},
		{
			question: "simpsons test question #10",
			options: ["simpsons option 10a", "simpsons option 10b (correct)", "simpsons option 10c", "simpsons option 10d"],
			answer: "simpsons option 10b (correct)"
		}
	],

	family: [
		{
			question: "family test question #1",
			options: ["family option 1a", "family option 1b (correct)", "family option 1c", "family option 1d"],
			answer: "family option 1b (correct)"
		},

		{
			question: "family test question #2",
			options: ["family option 2a (correct)", "family soption 2b", "family option 2c", "family option 2d"],
			answer: "family option 2a (correct)"
		},

		{
			question: "family test question #3",
			options: ["family option 3a", "family option 3b", "family option 3c (correct)", "family option 3d"],
			answer: "family option 3c (correct)"
		},
		{
			question: "family test question #4",
			options: ["family option 4a", "family option 4b", "family option 4c", "family option 4d (correct)"],
			answer: "family option 4d (correct)"
		},
		{
			question: "family test question #5",
			options: ["family option 5a", "family option 5b", "family option 5c", "family option 5d (correct)"],
			answer: "family option 5d (correct)"
		},
		{
			question: "family test question #6",
			options: ["family option 6a (correct)", "family option 6b", "family option 6c", "family option 6d"],
			answer: "family option 6a (correct)"
		},
		{
			question: "family test question #7",
			options: ["family option 7a", "family option 7b", "family option 7c", "family option 7d (correct)"],
			answer: "family option 7d (correct)"
		},
		{
			question: "family test question #8",
			options: ["family option 8a", "family option 8b (correct)", "family option 8c", "family option 8d"],
			answer: "family option 8b (correct)"
		},
		{
			question: "family test question #9",
			options: ["family option 9a", "family option 9b", "family option 9c (correct)", "family option 9d"],
			answer: "family option 9c (correct)"
		},
		{
			question: "family test question #10",
			options: ["family option 10a", "family option 10b (correct)", "family option 10c", "family option 10d"],
			answer: "family option 10b (correct)"
		}
	],

	saul: [
		{
			question: "saul test question #1",
			options: ["saul option 1a", "saul option 1b (correct)", "saul option 1c", "saul option 1d"],
			answer: "saul option 1b (correct)"
		},

		{
			question: "saul test question #2",
			options: ["saul option 2a (correct)", "saul soption 2b", "saul option 2c", "saul option 2d"],
			answer: "saul option 2a (correct)"
		},

		{
			question: "saul test question #3",
			options: ["saul option 3a", "saul option 3b", "saul option 3c (correct)", "saul option 3d"],
			answer: "saul option 3c (correct)"
		},
		{
			question: "saul test question #4",
			options: ["saul option 4a", "saul option 4b", "saul option 4c", "saul option 4d (correct)"],
			answer: "saul option 4d (correct)"
		},
		{
			question: "saul test question #5",
			options: ["saul option 5a", "saul option 5b", "saul option 5c", "saul option 5d (correct)"],
			answer: "saul option 5d (correct)"
		},
		{
			question: "saul test question #6",
			options: ["saul option 6a (correct)", "saul option 6b", "saul option 6c", "saul option 6d"],
			answer: "saul option 6a (correct)"
		},
		{
			question: "saul test question #7",
			options: ["saul option 7a", "saul option 7b", "saul option 7c", "saul option 7d (correct)"],
			answer: "saul option 7d (correct)"
		},
		{
			question: "saul test question #8",
			options: ["saul option 8a", "saul option 8b (correct)", "saul option 8c", "saul option 8d"],
			answer: "saul option 8b (correct)"
		},
		{
			question: "saul test question #9",
			options: ["saul option 9a", "saul option 9b", "saul option 9c (correct)", "saul option 9d"],
			answer: "saul option 9c (correct)"
		},
		{
			question: "saul test question #10",
			options: ["saul option 10a", "saul option 10b (correct)", "saul option 10c", "saul option 10d"],
			answer: "saul option 10b (correct)"
		}
	],

	movies: [
		{
			question: "movies test question #1",
			options: ["movies option 1a", "movies option 1b (correct)", "movies option 1c", "movies option 1d"],
			answer: "movies option 1b (correct)"
		},

		{
			question: "movies test question #2",
			options: ["movies option 2a (correct)", "movies soption 2b", "movies option 2c", "movies option 2d"],
			answer: "movies option 2a (correct)"
		},

		{
			question: "movies test question #3",
			options: ["movies option 3a", "movies option 3b", "movies option 3c (correct)", "movies option 3d"],
			answer: "movies option 3c (correct)"
		},
		{
			question: "movies test question #4",
			options: ["movies option 4a", "movies option 4b", "movies option 4c", "movies option 4d (correct)"],
			answer: "movies option 4d (correct)"
		},
		{
			question: "movies test question #5",
			options: ["movies option 5a", "movies option 5b", "movies option 5c", "movies option 5d (correct)"],
			answer: "movies option 5d (correct)"
		},
		{
			question: "movies test question #6",
			options: ["movies option 6a (correct)", "movies option 6b", "movies option 6c", "movies option 6d"],
			answer: "movies option 6a (correct)"
		},
		{
			question: "movies test question #7",
			options: ["movies option 7a", "movies option 7b", "movies option 7c", "movies option 7d (correct)"],
			answer: "movies option 7d (correct)"
		},
		{
			question: "movies test question #8",
			options: ["movies option 8a", "movies option 8b (correct)", "movies option 8c", "movies option 8d"],
			answer: "movies option 8b (correct)"
		},
		{
			question: "movies test question #9",
			options: ["movies option 9a", "movies option 9b", "movies option 9c (correct)", "movies option 9d"],
			answer: "movies option 9c (correct)"
		},
		{
			question: "movies test question #10",
			options: ["movies option 10a", "movies option 10b (correct)", "movies option 10c", "movies option 10d"],
			answer: "movies option 10b (correct)"
		}
	]	
};

//    <---- *** Need to write [current version has hard-coded gameChosen variable
// (FOR MULTIGAME: unset value on line below, value should be set by HTML button at beginning)]
var gameChosen = gameData.simpsons;

var orderedArray = [];
var questionsRemaining = null;
var scoreCorrect = 0;
var scoreWrong = 0;
var currentTimer = null;


// <---- *** Need to write [current version has hard-coded HTML]
// Sets HTML for chosen game and pulls data from game's object
function chooseGame(game) {
	// Sets gameChosen variable to pull correct game object within gameData object
	switch (game) {
		case "family":
			gameChosen = gameData.family;
			break;
		case "family":
			gameChosen = gameData.family;
			break;
		case "saul":
			gameChosen = gameData.saul;
			break;
		case "movies":
			gameChosen = gameData.movies;
			break;
	}

	// *** Need to write.  Dynamically create HTML layout based on chosen game (optional feature)
	function createHTML(gameChosen) {

	};

	starGame();
}

// Generates a randomized question array
function makeQuestionBank(game) {

	var indexArray = [];
	orderedArray = [];
	var numExists = false;

	// Creates a random array of non-repeating number values equal to the length of the chosen game's array
	while (indexArray.length < gameChosen.length) {

		var randomNum = getRandomNumber(0, (gameChosen.length - 1));
		
		// Checks to see if number is already in indexArray
		for (i = 0; i < indexArray.length; i++) {
			if (indexArray[i] == randomNum) {
				numExists = true;
			}
		}
		// If number is not in array, add number to array
		if (numExists == false) {
			indexArray.push(randomNum);
		}

		// Set condition back to default for next loop iteration
		numExists = false;
	}

	// Orders the questions by referencing the randomized indexArray
	for (j = 0; j < indexArray.length; j++) {
		var index = indexArray[j];
		orderedArray[j] = gameChosen[index];
	}

	// Generates random number between min and max arguments and returns value
	function getRandomNumber (min, max) {
		var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNum;
	}
}

// Checks for remaining questions and displays them in the main section
function nextQuestion() {
	
	clearInterval(currentTimer);
	clearScreen();

	if (questionsRemaining > 0) {
		var string = "<h2 class=\"col-lg-8 col-lg-offset-2\">" + orderedArray[0].question + "</h2>";
		$("#questionSection").html(string);

		for (i = 0; i < orderedArray[0].options.length; i++) {
			var string = "<button class=\"col-lg-8 col-lg-offset-2 options\" value=\"" + i + "\" onclick=\"checkAnswer(" + i + ")\">" + orderedArray[0].options[i] + "</button>";
			$("#optionsSection").append(string);
		}
		
		questionsRemaining -= 1;
		// Pass length of timer and function to execute on expiration of time
		setTimer(8, outOfTime, true);

	} else {
		endGame();
	}
}

function setTimer(length, callback, displayTime) {
	// Sets time for player to answer
	var timeLeft = length;
	$("#timerLabel").html("Time Remaining: ");
	
	if (displayTime == true) {
		$("#timerSection").html(timeLeft);
	}
	
	// Sets timer to update displayed time every 1 sec
	currentTimer = setInterval(function(){

		timeLeft -= 1;
		// If timer reaches 0, run callback function
		if (timeLeft == 0) {
			window.clearInterval(currentTimer);
			callback();
		}
		if (displayTime == true) {
			$("#timerSection").html(timeLeft);
		}

	}, 1000);
}

// Runs when player does not answer within the alloted time
function outOfTime() {
	clearScreen();
	clearInterval(currentTimer);
	setTimer(3, nextQuestion, false);
	$("#questionSection").html("<h1>Noooooo! You ran out of time.</h1><br><h2>You gotta be quicker than that!</h2>");
	$("#questionSection").append("<p>The correct answer was:</p><br><h2>" + orderedArray[0].answer + "</h2>");
	scoreWrong += 1;
	displayScore();
}

// Checks answer from player input against correct answer.
// Increments score, clears screen, displays correct answer and starts next question
function checkAnswer(answer) {
	clearInterval(currentTimer);
	$("#timerSection").html("");
	setTimer(3, nextQuestion, false);

	if (orderedArray[0].options[answer] === orderedArray[0].answer) {
		scoreCorrect += 1;
		correctAnswer();
	} else {
		scoreWrong += 1;
		wrongAnswer();
	}

	orderedArray.shift();
	displayScore();

	// Check for wrong answer, displays correct answer to player
	function wrongAnswer() {
		clearScreen();

		$("#questionSection").html("<h1>Oops, that answer was incorrect!</h1><br><h2>You might need to brush up on your Simpsons episodes.</h2>");
		$("#questionSection").append("<p>The correct answer was:</p><br><h2>" + orderedArray[0].answer + "</h2>");
	}

	// Check for correct answer, displays statement based on current score and correct answer
	function correctAnswer() {
		clearScreen();

		if (questionsRemaining > 0) {
			if (scoreCorrect > 15) {
				string = "You are clearly well versed on The Simpsons.<br>We might need to made these question a little harder.";
			} else if (scoreCorrect > 12) {
				string = "You are doing great, keep going!";
			} else if (scoreCorrect > 6) {
				string = "Decent job so far.";
			} else if (scoreCorrect > 3) {
				string = "Okay, you've watched the Simpsons a time or two.&nbsp;&nbsp;Respectable.";
			} else {
				string = "Probably just a lucky guess.";
			}

			$("#questionSection").html("<h1>Correct!</h1><br><h2>" + string + "</h2>");
			$("#questionSection").append("<p>The correct answer was:</p><br><h2>" + orderedArray[0].answer + "</h2>");
		
		} else {

			$("#questionSection").html("<h1>You made it through the quiz!</h1><br><h2>Stay tuned for your final score.</h2>");
		
		}
	}
}

// Displays current scores
function displayScore() {
	$("#scoreCorrectSection").html("<h4>Answers Correct:</h4><br><h4>" + scoreCorrect + "</h4>");
	$("#scoreWrongSection").html("<h4>Answers Incorrect:</h4><br><h4>" + scoreWrong + "</h4>");
}

// Generates question bank, sets questionsRemaining variable to # of questions in bank, displays score, fetches first question
function startGame() {
	clearInterval(currentTimer);
	resetValues();
	makeQuestionBank(gameChosen);
	questionsRemaining = orderedArray.length;
	displayScore();
	nextQuestion();
}

// Displays stats at game end.  New game auto starts after 5 seconds with page refresh
function endGame() {
	var scoreTotal = scoreCorrect + scoreWrong;
	var string = "<h2>You Finished The Game!</h2><br>";
	string += "<h4>You correctly guessed " + scoreCorrect + " out of " + scoreTotal + "<br><br>";
	string += "That is " + (scoreCorrect/scoreTotal*100) + "%";
	$("#questionSection").html(string);
	currentTimer = setInterval(startGame, 5000);
}

// Clears main content screen
function clearScreen() {
	$("#questionSection").html("");
	$("#optionsSection").html("");
}

// Reset default score values
function resetValues() {
	questionsRemaining = null;
	scoreCorrect = 0;
	scoreWrong = 0;
}




// <---- *** When theme buttons are added to index.html, this call will be removed.
// startGame() function will be called from HTML button click and passed game name as argument
startGame();