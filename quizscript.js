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

var quizQuestionEl = document.querySelector("#quizQuestion");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");

var questions = [
    {
    "question": "Commonly used data types DO NOT include:",
    "option1" : "1. strings",
    "option2" : "2. booleans",
    "option3" : "3. alerts",
    "option4" : "4. numbers",
    "correctOpt" : "3. alerts"
    },
    {
    "question": "The condition in an if/else statement is enclosed within ________.",
    "option1" : "1. quotes", 
    "option2" : "2. curly brackets", 
    "option3" : "3. parentheses", 
    "option4" : "4. square brackets",
    "correctOpt" : "3. parentheses"
    },
    {
    "question": "Arrays in JavaScript can be used to store ______.",
    "option1" : "1. numbers and strings", 
    "option2" : "2. other arrays", 
    "option3" : "3. booleans", 
    "option4" : "4. all of the above",
    "correctOpt" : "4. all of the above"
    },
    {
    "question": "String values must be enclosed within _____ when being assigned to variables.",
    "option1" : "1. commas", 
    "option2" : "2. curly brackets", 
    "option3" : "3. quotes", 
    "option4" : "4. parentheses",
    "correctOpt" : "3. quotes"
    },
    {
    "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
    "option1" : "1. JavaScript", 
    "option2" : "2. terminal/bash", 
    "option3" : "3. for loops", 
    "option4" : "4. console.log",
    "correctOpt" : "4. console.log"
    },
]



//var q1Selection = 

questions.question1.options.addEventListener("click", function() {

})



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