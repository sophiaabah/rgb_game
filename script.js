
var btns = document.querySelectorAll(".btn");
var rgbValue = document.querySelector(".rgb");
var msg = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector(".reset");


var numOfBtns = 6;
var answer;
var colourSet = [];
var mySet = new Set ();
var txtArray = ['Here are six options:', 'How deep is your chromatophilia?', 'Randomly generated brain-teaser.', 'Roses are red, violets are blue.', 'Developed with love.', 'Our colours are carefully handpicked by code.', 'Next gen bumms', 'Are you a colour ninja?', `'Color' or 'colour'? That is the question.`];


// colour1 and colourSet are the same. but colour1 cant be accessed outside its scope

init();

function init(){
     rgbValue.textContent = answer;
     setup();
     reset();
}


function pickText() {
     var text = Math.floor(Math.random() * 9);
     return text;
}


function genOne() {
     var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
     return "rgb("+ r + ", " + g + ", " + b + ")";
}
//or use `rgb(${r}, ${g}, ${b})` 


function genMore (x){
     var colour1 = []
     for (var i = 0; i < x; i++) {
		colour1.push(genOne());
	}
	return colour1;
}

function defineAns() {
     var randomIndex = Math.floor(Math.random() * colourSet.length);
     return colourSet[randomIndex];
}

function setup() {
     mySet.clear();
     mySet.add('rgb(44, 44, 44)');
     for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {    
               var clickedColor = this.style.backgroundColor;
               mySet.add(clickedColor);
               console.log(mySet);
               if(clickedColor === answer) {
                    msg.textContent = "Awesome! You win.";    
                    userWins(answer);
               }
               else if (mySet.size === 5){
                    msg.textContent = "Oops. You're out of attempts.";
                    userLost("#2c2c2c");
                    //document.body.style.backgroundColor = '#9f9999'
                    //resetBtn.style.color = '#cecece'
               }
               else { 
                    msg.textContent = "Not quite right...";
                    this.style.backgroundColor = "#2c2c2c";
               
               }
          });
     }
    
}

function reset() {
     mySet.clear();
     mySet.add('rgb(44, 44, 44)');
     colourSet = genMore(numOfBtns);
     answer = defineAns();
     rgbValue.textContent = answer;
     h1.style.backgroundColor = "#ccd3c9";
     msg.textContent = txtArray[pickText()];
     for (var i = 0; i < btns.length; i++) {
		btns[i].style.backgroundColor = colourSet[i];
		}

}

function userWins(colour) {
     for(var i = 0; i < btns.length; i++) {
		btns[i].style.backgroundColor = colour;    
	}
}

function userLost(colour) {
     for(var i = 0; i < btns.length; i++) {
		btns[i].style.backgroundColor = colour;    
	}
}