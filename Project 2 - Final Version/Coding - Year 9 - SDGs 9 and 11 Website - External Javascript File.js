
// February - April, 2021 // 
// Cedric Furman //
// This is my website for project 2, whose aim is to explain and compare United Nations Sustainable Developement Goals (SDG) 9 and 11 //
// The website has 5 different pages: Page 1 - SDG 9, page 2 - SDG 11, page 3 - comparing both SDGs, page 4 - further reading, and page 5 - how to take action //
// This is the external Javascript file with the function definitions used for the entire website //



function home() { // Sends the user back to the first webpage (SDG 9) when they click the logo

		window.open("Coding - Year 9 - SDG 9 Website.html", "_self"); // The SDG 9 webpage is opened in the same tab by passing "_self" in the open() function

}

// -----------------------------

function search() { // Takes input from the search bar to direct the user, there are currently

	if (document.getElementById("entryBox")) { // Makes sure the value of the entry box is not undefined, which would be prone to errors 

		userInput = (document.getElementById("entryBox").value).toLowerCase(); // Stores user input from the search bar

	}

	if (userInput == "sdg 9" ||	userInput == "goal 9" || userInput == "sustainable development goal 9") { // If the user inputed SDG 9 (or something similar), then they are redirected to the SDG 9 page

		window.open("Coding - Year 9 - SDG 9 Website.html", "_self");

	}

	else if (userInput == "sdg 11" || userInput == "goal 11" || userInput == "sustainable development goal 11") {

		window.open("Coding - Year 9 - SDG 11 Website.html", "_self");

	}

	else if (userInput == "comparison" || userInput == "sdg comparison" || userInput == "sdgs 9 and 11 comparison") {

		window.open("Coding - Year 9 - SDGs 9 and 11 Comparison Website.html", "_self");

	}

	else if (userInput == "further reading") {

		window.open("Coding - Year 9 - SDGs 9 and 11 Further Reading Website.html", "_self");

	}

	else if (userInput == "take action") {

		window.open("Coding - Year 9 - SDGs 9 and 11 Take Action Website.html", "_self");

	}

	else {

		alert("No search results for " + userInput);

	}

}

// -----------------------------

// Because the webapge contains three subpages, there are three sets of information and media that may be displayed. All three sets are displayed at the same time, but "display:none;" is used to stop the 2 unselected sets from appearing

// The current subpage is displayed using a function:
function displaySubpage() {

	if (selectedSubpage === "theProblem") {	// If the current subpage is the problem, then a series of style changes are used to display it:

		// The secondary navigation bar is configured to display that the selected button is that of the problem
		document.getElementById("theProblem").style.backgroundColor = "lightgreen";
		document.getElementById("solutions").style.backgroundColor = "dimgrey"; // The other buttons are made grey again because they could have been selected previously
		document.getElementById("examples").style.backgroundColor = "dimgrey";

		// The current subpage is displayed, while the other two subpages are hidden
		document.getElementById("theProblemTable").style.display = "block";
		document.getElementById("solutionsTable").style.display = "none";
		document.getElementById("examplesTable").style.display = "none";

	}

	else if (selectedSubpage === "solutions") {

		document.getElementById("theProblem").style.backgroundColor = "dimgrey";
		document.getElementById("solutions").style.backgroundColor = "lightgreen";
		document.getElementById("examples").style.backgroundColor = "dimgrey";

		document.getElementById("theProblemTable").style.display = "none";
		document.getElementById("solutionsTable").style.display = "block";
		document.getElementById("examplesTable").style.display = "none";

	}

	else {

		document.getElementById("theProblem").style.backgroundColor = "dimgrey";
		document.getElementById("solutions").style.backgroundColor = "dimgrey";
		document.getElementById("examples").style.backgroundColor = "lightgreen";

		document.getElementById("theProblemTable").style.display = "none";
		document.getElementById("solutionsTable").style.display = "none";
		document.getElementById("examplesTable").style.display = "block";

	}

}

var selectedSubpage = ""; // Stores the selected subpage

function displayTheProblem() { // If the problem button has been pressed in the secondary navigation bar, a function is called to set it as the selected subpage

	selectedSubpage = "theProblem";

}

function displaySolutions() { 

	selectedSubpage = "solutions";

}

function displayExamples() { 

	selectedSubpage = "examples";

}

// -----------------------------

// This is the Javascript for the SDGs 9 and 11 quiz on the further reading webapge

var questions = [ // An array that stores the questions of the quiz

	"True or false. Healthcare is a type of infrastructure.",
	"What kind of infrastructure can be a hazard?",
	"What city has a subway system with 8.7 million daily passengers?",
	"True or false. Millions of premature deaths occur because of air pollution.",
	'What city did the "Big Dig" take place in?'

];

var answers = [ // An array for the quiz answers

	"true",
	"obsolete",
	"Tokyo",
	"true",
	"Boston"

];

var currentQuestion = 0; // Stores the current question from the array above

var correctAnswers = 0; // Stores the number of answers the user entered correctly

var start = true; // Stores whether the user has started the quiz

var restart = false; // Stores whether the user has restarted the quiz

function quizUser() {

	if (document.getElementById("answerBox").value || start == true) {

		document.getElementById("submitButton").innerHTML = "Submit"; // The submit button is reset just in case it was changed to retry when the user finished the quiz
		document.getElementById("answerBox").style.marginLeft = "75px"; // The same goes for the answer box
		document.getElementById("answer").innerHTML = ""; // The answer summary is also reset

		if (start == true || restart == true) {

			start = false; // The quiz has started

			restart = false;

			// The current question is displayed to the user
			document.getElementById("question").innerHTML = questions[currentQuestion]; 
			document.getElementById("question").style.color = "black";


			return;

		}

		var userResponse = (document.getElementById("answerBox").value).toLowerCase(); // A local variable for the user's answer to the current question

		var answer = answers[currentQuestion]; // Stores the current answer

		var correct = false; // stores whether the user answered the current question correctly

		if (userResponse == (answers[currentQuestion]).toLowerCase()) { // Checks if the user has the right response, and if so, adds to their score

			++correctAnswers;

			correct = true;

		}

		// Gives the user a summary of their response
		if (correct == true) {

			document.getElementById("answer").innerHTML = ("Correct! The answer was " + answer); // Gives the user a summary of their response
			document.getElementById("answer").style.color = "green";

		}

		else if (correct == false) {

			document.getElementById("answer").innerHTML = ("Incorrect, the answer was " + answer); // Gives the user a summary of their response
			document.getElementById("answer").style.color = "red";

		}

		if (currentQuestion == 4) {

			document.getElementById("submitButton").innerHTML = "Retry"; // The quiz has ended and the user now has the option to retry

			currentQuestion = 0; // The current question of the quiz is reset back to the beginning

			var score = ""; // Stores the score the user scored on the quiz

			var colour = ""; // stores the colour of the text in the score display

			if (correctAnswers <= 2) {

				score = "Better luck next time, you got " + correctAnswers + " out of 5 questions correct";
				colour = "red";

			}

			else if (correctAnswers < 5 && correctAnswers > 2) {

				score = "Well done, you got " + correctAnswers + " out of 5 questions correct";
				colour = "lightgreen";

			}

			else if (correctAnswers == 5) {

				score = "Awesome! You got " + correctAnswers + " out of 5 questions correct";
				colour = "green";

			}

			document.getElementById("question").innerHTML = score;
			document.getElementById("question").style.color = colour;

			correctAnswers = 0; // Resets the user's score

			restart = true; // The quiz has restarted

			return;

		}

		++currentQuestion;

		// The current question is displayed to the user
		document.getElementById("question").innerHTML = questions[currentQuestion]; 
		document.getElementById("question").style.color = "black";

	}

}

// -----------------------------

// The following code is for the slideshow on the SDG 11 webapge, source: https://www.w3schools.com/howto/howto_js_slideshow.asp

var currentImage = 0; // Stores the current image of the slideshow

var srcs = [ // Stores the srcs of the images in the slideshow

	"BigDigBefore.jpg",
	"BigDigProcess.jpg",
	"RoseKennedyGreenway.jpg"

]

function displayNextImage() { // Displays the next image in the slideshow

	if (currentImage < srcs.length - 1) { // If incrimenting currentImage is within the slideshow, its corresponding image is displayed

		++currentImage;

		document.getElementById("slideshow").src = srcs[currentImage];

		console.log("Displayed next image");

	}

	else { // The current image is reset and a nested function is called

		currentImage = -1;

		displayNextImage();

	}

}

function displayPreviousImage() { // Displays the previous image in the slideshow

	if (currentImage > 0) { // If decreasing currentImage is within the slideshow, its correlating image is shown

		--currentImage;

		document.getElementById("slideshow").src = srcs[currentImage];

		console.log("Displayed previous image");

	}

	else { 

		currentImage = 3;

		displayPreviousImage();

	}

}


