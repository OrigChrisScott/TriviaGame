var gameOn = null;


var gameData = {
	simpsons: {
		question1: {
			question: "si test question #1",
			options: ["si option 1a", "si option 1b", "si option 1c", "si option 1d"],
			answer: "si test answer #1"
		},

		question2: {
			question: "si test question #2",
			options: ["si option 2a", "si soption 2b", "si option 2c", "si option 2d"],
			answer: "si test answer #2"
		},

		question3: {
			question: "si test question #3",
			options: ["si option 3a", "si option 3b", "si option 3c", "si option 3d"],
			answer: "si test answer #3"
		}
	},

	family: {
		question1: {
			question: "fa test question #1",
			options: ["fa option 1a", "fa option 1b", "fa option 1c", "fa option 1d"],
			answer: "fa test answer #1"
		},

		question2: {
			question: "fa test question #2",
			options: ["fa foption 2a", "fa option 2b", "fa option 2c", "fa option 2d"],
			answer: "fa test answer #2"
		},

		question3: {
			question: "fa test question #3",
			options: ["fa option 3a", "fa option 3b", "fa option 3c", "fa option 3d"],
			answer: "fa test answer #3"
		}
	},

	saul: {
		question1: {
			question: "sa test question #1",
			options: ["sa option 1a", "sa option 1b", "sa option 1c", "sa option 1d"],
			answer: "sa test answer #1"
		},

		question2: {
			question: "sa test question #2",
			options: ["sa option 2a", "sa option 2b", "sa option 2c", "sa option 2d"],
			answer: "sa test answer #2"
		},

		question3: {
			question: "sa test question #3",
			options: ["sa option 3a", "sa option 3b", "sa option 3c", "sa option 3d"],
			answer: "sa test answer #3"
		}
	},

	movies: {
		question1: {
			question: "mo test question #1",
			options: ["mo option 1a", "mo option 1b", "mo option 1c", "mo option 1d"],
			answer: "mo test answer #1"
		},

		question2: {
			question: "mo test question #2",
			options: ["mo option 2a", "mo option 2b", "mo option 2c", "mo option 2d"],
			answer: "mo test answer #2"
		},

		question3: {
			question: "mo test question #3",
			options: ["mo option 3a", "mo option 3b", "mo option 3c", "mo option 3d"],
			answer: "mo test answer #3"
		}
	}	
};

var gameChosen = gameData.simpsons;
var questionsRemaining = null;

// var questionOrder = [];


var timer = {

	start: function(time) {

	},
	stop: function() {

	},
	pause: function() {

	},
	restart: function() {

	},
	reset: function(time) {

	}

};


function createHTML(gameChosen) {

};

var orderedArray = [];

function makeQuestionBank(game) {

	var size = 0;
	
	for (var item in game) {
			size += 1;
	}

	console.log(size);
	console.log(gameChosen['question1'].options[1]);

	///End point  <-- start here
	for (i = 0; i < size; i++) {
		var str = "question" + i;
		orderedArray.push(gameChosen[str]); 
		
	}

	console.log(orderedArray);

	// function randomize(orderedArray) {
	// 	var randomIndex = [];

	// };


};

// console.log(gameChosen);
makeQuestionBank(gameChosen);

