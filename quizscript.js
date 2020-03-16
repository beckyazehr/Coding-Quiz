var timerEl = document.querySelector("#timer");

function setTime(secondsLeft) {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

setTime(5);


//need timer to start when 'start game' button is pressed
//need startPage to populate first and change to quizPage when 'start quiz' button is pressed
//need quizPage to disappear and scorePage to appear when final question is answered
//need questions and answer options inputted
//need correct answer to light green and incorrect answer to light right on click
    //or have 'correct' or 'incorrect' show up on screen momentarily
//need to subtract 10 seconds from the timer for every incorrect answer
//need to stop the timer when the final question has been answered
//need to set final score equal to the time at the time the quiz is done
//need to save the initials and score to the highscores page
//need to save scores/initials on highscores page locally
//need to delete all scores/initials when 'clear scores' button is pressed
//need to return to startPage when 'go back' button on highscores page is pressed