// starting length of the sequence //
var length=3;
// starting delay between button flashes  //
var delay = 1500;
// initialising blank sequence //
var answer="";
// starting score at 0 //
var score = 0;
// seperate counter which increases every 3 score (used for length increase) //
var lcount=0;

function newsc(){
	// resets all main variables 
	length=3;
	delay = 1500;
	answer="";
	score = 0;
	lcount=0;
	document.getElementById("score").textContent = 'score: '+score;
}

// win function occurs whenever user gets the answer right //
function win(){
	// lcount is increased by 1 per score, so when it reaches 3, or every 3 score, the length gets increased //
	lcount+=1
	if (lcount>=3){
		// increases sequence length by 1 //
		length+=1;
		// resets lcount so it will reach three in 3 more correct answers // 
		lcount=0
	}
	// resets users answer, decreases the delay, so the game speeds up, and increases score by 1 //
	answer="";
	delay-=50;
	score+=1;
	// updates score value on page // 
	document.getElementById("score").textContent = 'score: '+score;

}
function lose(){
	// resets main variables and opens menu //
	length=3;
	delay = 1500;
	score = 0;
	l=0;
	openm();
}

function main(color){
	// takes input from button and adds it to answer string //
	answer=answer+color;
	// when the amount of button clickes matches the amount of answers, check the answer//
	if (answer.length>=length){
		check(answer);
	}
}

function check(answer){
	// if answer is correct, run sequences for winning, and generate a new answer/start a new round //
	if (answer==window.sequence){
		alert("correct");
		win();
		gen();
	}
	else{
	// if it isnt, run sequence for losing //
		alert("incorrect");
		lose();
	}
}


function flash(id, i){

	setTimeout(function() {
		document.getElementById(id).style.animation="flash .75s linear";

			setTimeout(function() {
				document.getElementById(id).style.animation="none";
			}, 750)

		}, delay*i+1500)
	// set the class of the parameter id to flash for .75 seconds, wait .75 seconds and take it away, then pause the program for a value determined by delay //
}


function gen(){
	// clears the answer and the sequence and sets count to 0 //
	answer=""
	var sequence = "";
	count=0;
	// until count (current answer length) = length determined by difficulty
	while (count < length){
		//generate a random number between 1 and 9 (representing each color), add it to the sequence and increase count by 1 to match sequence length //
		var col = Math.floor(Math.random() * 9);
		sequence = sequence+col;
		count++;
	}
	//makes each button in sequence flash // 
	wloop(sequence); 
	//sets sequence as a global variable //
	window.sequence=sequence;
	// sets the span around the buttons to be non clickable until the buttons stop flashing (the delay between each button * the length of the buttons in the sequence) //
	document.getElementById("noclick").style["pointerEvents"] = "none";
	// sets the buttons back to clickable after the delay finishes
	setTimeout(function() {
		document.getElementById("noclick").style["pointerEvents"] = "all";
	}, window.sequence.length*delay+1500)

	

}

function wloop(sequence){
	// runs the flash function with each button id as a parameter // 
	for (let i=0; i < sequence.length; i++){
    		flash(sequence[i], i);

		}
	}




//initialises elements of the pause menu as js variables //
var modal = document.getElementById("myModal");
var button = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// the open modal function which is bound to buttons in the html now makes the modal visible //
function openm() {
  document.getElementById("myModal").style.display = "block";
}

// the close modal function which is bound to buttons makes the modal invisible //
function closem() {
	document.getElementById("myModal").style.display = "none";
}

