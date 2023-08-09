'use strict';

//Generating Random Number;
let randomNumber = Math.floor(Math.random()*20)+1;
let score = 10;
let highscore = 0;

//Getting thr Value from the User;
//Now we are adding event listner that will listen the event on mouse click and will work accordingly
document.querySelector(".check").addEventListener("click", function(){ 
    let input = Number(document.querySelector(".guess").value); //Getting the input from the user and storing it inside a variable named input
    console.log(input, typeof input);

    if(!input){
        alert("No Number ⛔"); 
        document.querySelector(".message").innerHTML = "No Number ⛔"; //If the input is 0 or a string or a blank it will return a alert and message no number
        score--;
        document.querySelector(".score").textContent = score;
    } else if (input > 20){
        alert("Please Select between 1-20!");
        document.querySelector(".message").innerHTML = "Greater than 20!"; //If the input is greater than 20 it will return a alert and message greater than 20
        score--;
        document.querySelector(".score").textContent = score;
    } else if (input === randomNumber){
        document.querySelector(".message").innerHTML = "Correct Number! 🎉";
        document.querySelector("body").classList.add("correct");
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".number").classList.add("number-correct");
        if(score>highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (input !== randomNumber) {
        if(score >= 1) {
            input>randomNumber ? document.querySelector(".message").innerHTML = "📈 Too high!" : document.querySelector(".message").innerHTML = "📉 Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else{
            document.querySelector(".message").textContent = "You lost the game 💥";
            document.querySelector(".score").textContent = 0;
        }
    }
})

document.querySelector(".again").addEventListener("click", function(){
    score = 10;
    randomNumber = Math.floor(Math.random()*20)+1;
    document.querySelector(".number").innerHTML = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector("body").classList.remove("correct");
    document.querySelector(".number").classList.remove("number-correct");
})


