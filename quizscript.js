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
    //change the page
}

startBtnEl.addEventListener("click", function() {
    startQuiz();
})





//need quizPage to disappear and scorePage to appear when final question is answered
//need questions and answer options inputted
//need correct answer to light green and incorrect answer to light right on click
    //or have 'correct' or 'incorrect' show up on screen momentarily
//need to subtract 10 seconds from the timer for every incorrect answer and make sure it does not go below 0
//need to stop the timer when the final question has been answered
//need to set final score equal to the time at the time the quiz is done
//need to save the initials and score to the highscores page
//need to save scores/initials on highscores page locally
//need to delete all scores/initials when 'clear scores' button is pressed
//need to return to startPage when 'go back' button on highscores page is pressed