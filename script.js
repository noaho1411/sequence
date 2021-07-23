var length=3;
var delay = 1500;
var answer="";
var score = 0;
var l=0;

function newsc(){

	length=3;
	delay = 1500;
	answer="";
	score = 0;
	l=0;
	document.getElementById("score").textContent = 'score: '+score;
}

function win(){
	l+=1
	if (l>=3){
		length+=1;
		l=0
	}
	answer="";
	delay-=50;
	score+=1;
	document.getElementById("score").textContent = 'score: '+score;

}
function lose(){
	length=3;
	delay = 1500;
	score = 0;
	l=0;
	openm();
}

function main(color){
	answer=answer+color;
	console.log(answer)
	if (answer.length>=length){
		check(answer);
	}
}

function check(answer){
	if (answer==window.sequence){
		alert("correct");
		win();
		gen();
	}
	else{
		alert("incorrect");
		lose();
	}
}


function flash(id, i){

	setTimeout(function() {
		document.getElementById(id).style.animation="spin .75s linear";

			setTimeout(function() {
				document.getElementById(id).style.animation="none";
			}, 750)
	}, delay*i+1500)
}
function gen(){
	answer=""
	var sequence = "";
	x=0;

	while (x < length){
		var col = Math.floor(Math.random() * 9);
		sequence = sequence+col;
		x++;
	}
	console.log(sequence);
	wloop(sequence);
	window.sequence=sequence;
	document.getElementById("noclick").style["pointerEvents"] = "none";
	setTimeout(function() {
		document.getElementById("noclick").style["pointerEvents"] = "all";
	}, window.sequence.length*delay+1500)

	

}

function wloop(sequence){

	for (let i=0; i < sequence.length; i++){
    		flash(sequence[i], i);

		}
	}












var modal = document.getElementById("myModal");
var button = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
function openm() {
  document.getElementById("myModal").style.display = "block";
}
function closem() {
	document.getElementById("myModal").style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("myModal").style.display = "none";
  }
}
