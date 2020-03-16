var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#startBtn");
var startPageEl = document.querySelector("#startPage");
var quizPageEl = document.querySelector("#quizPage");

function setTime(secondsLeft) {
    var timerInterval = setInterval(function() {
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

        timerEl.textContent = secondsLeft;
        secondsLeft--;
    }, 1000)
}

function startQuiz() {
    setTime(5);
    startPageEl.classList.add("hide");
    quizPageEl.classList.remove("hide");
}

startBtnEl.addEventListener("click", function() {
    startQuiz();
})

var questions = {
    "question1": {
        "q1": "Commonly used data types DO NOT include:",
        "options1" : ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        "correctOpt1" : "3. alerts"
    },
    "question2": {
        "q2": "The condition in an if/else statement is enclosed within ________.",
        "options2" : ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        "correctOpt2" : "3. parentheses"
    },
    "question3": {
        "q3": "Arrays in JavaScript can be used to store ______.",
        "options3" : ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        "correctOpt3" : "4. all of the above"
    },
    "question4": {
        "q4": "String values must be enclosed within _____ when being assigned to variables.",
        "options4" : ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        "correctOpt4" : "3. quotes"
    },
    "question5": {
        "q5": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "options5" : ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        "correctOpt5" : "4. console.log"
    },
}




//need quizPage to disappear and scorePage to appear when final question is answered
//need correct answer to light green and incorrect answer to light right on click
    //or have 'correct' or 'incorrect' show up on screen momentarily
//need to subtract 10 seconds from the timer for every incorrect answer and make sure it does not go below 0
//need to stop the timer when the final question has been answered
//need to set final score equal to the time at the time the quiz is done
//need to save the initials and score to the highscores page
//need to save scores/initials on highscores page locally
//need to delete all scores/initials when 'clear scores' button is pressed
//need to return to startPage when 'go back' button on highscores page is pressed

/*nextEl.addEventListener("click", function() {
    i++
    if (i > images.length -1) {
        i = 0;
    }
    imagesEl.setAttribute("src", images[i])   
}) */