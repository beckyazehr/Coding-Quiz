var timerEl = document.querySelector("#timer");
var startBtnEl = document.querySelector("#startBtn");
var startPageEl = document.querySelector("#startPage");
var quizPageEl = document.querySelector("#quizPage");
var scorePageEl = document.querySelector("#scorePage");
var scoreEl = document.querySelector("#score");
var inlineFormInputEl = document.querySelector("#inlineFormInput");
var submitEl = document.querySelector("#submit")
var secondsLeft = 75;
var timerInterval = null;

function setTime() {
    timerInterval = setInterval(function() {
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

        timerEl.textContent = secondsLeft;
        secondsLeft--;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
    }, 1000)
}

function startQuiz() {
    setTime();
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
    "correctOpt" : "option3"
    },{
    "question": "The condition in an if/else statement is enclosed within ________.",
    "option1" : "1. quotes", 
    "option2" : "2. curly brackets", 
    "option3" : "3. parentheses", 
    "option4" : "4. square brackets",
    "correctOpt" : "option3"
    },{
    "question": "Arrays in JavaScript can be used to store ______.",
    "option1" : "1. numbers and strings", 
    "option2" : "2. other arrays", 
    "option3" : "3. booleans", 
    "option4" : "4. all of the above",
    "correctOpt" : "option4"
    },{
    "question": "String values must be enclosed within _____ when being assigned to variables.",
    "option1" : "1. commas", 
    "option2" : "2. curly brackets", 
    "option3" : "3. quotes", 
    "option4" : "4. parentheses",
    "correctOpt" : "option3"
    },{
    "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
    "option1" : "1. JavaScript", 
    "option2" : "2. terminal/bash", 
    "option3" : "3. for loops", 
    "option4" : "4. console.log",
    "correctOpt" : "option4"
    },
]

var runningQuestionIndex = 0;
var lastQuestionIndex = questions.length -1;

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    quizQuestionEl.innerHTML = q.question;
    option1El.innerHTML = q.option1;
    option2El.innerHTML = q.option2;
    option3El.innerHTML = q.option3;
    option4El.innerHTML = q.option4;
}

renderQuestion();

//make sure user has clicked on one of the options?
option1El.addEventListener("click", function (event) {
    checkAnswer(event);
})
option2El.addEventListener("click", function (event) {
    checkAnswer(event);
})
option3El.addEventListener("click", function (event) {
    checkAnswer(event);
})
option4El.addEventListener("click", function (event) {
    checkAnswer(event);
})
/*
document.addEventListener("click", function(event) {
    checkAnswer(event);
})
*/

function checkAnswer(event) {
    var answer = event.currentTarget;
    //console.log(answer === option1El)

    var correctEl = null;
    if (questions[runningQuestionIndex].correctOpt === "option1") {
        correctEl = option1El;
    } else if (questions[runningQuestionIndex].correctOpt === "option2") {
        correctEl = option2El
    } else if (questions[runningQuestionIndex].correctOpt === "option3") {
        correctEl = option3El
    } else if (questions[runningQuestionIndex].correctOpt === "option4") {
        correctEl = option4El
    }

    if (answer === correctEl) {
        //alert("Right");
    } else {
        //alert("Wrong");
        secondsLeft -= 10
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
    }

    runningQuestionIndex++;

    if (runningQuestionIndex <= lastQuestionIndex) { 
        renderQuestion();
    } else {
        quizPageEl.classList.add("hide");
        scorePageEl.classList.remove("hide");
        clearInterval(timerInterval);
        scoreEl.textContent = secondsLeft + 1;
        timerEl.textContent = secondsLeft + 1;
    }
}

submitEl.addEventListener("click", function() {
    event.preventDefault();
    var initials = inlineFormInputEl.value;
    var score = secondsLeft + 1;
    localStorage.setItem(initials, score);
    window.location.href = "highscore.html";
})





//need to delete all scores/initials when 'clear scores' button is pressed
//need to return to startPage when 'go back' button on highscores page is pressed
