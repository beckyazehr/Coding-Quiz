//variable declarations
var scoreListEl = document.querySelector("#scoreList");
var goBackEl = document.querySelector("#goBack");
var clearScoresEl = document.querySelector("#clearScores");

//for loop pulling in initials/scores saved locally and appending to the page
for (var i = 0; i < localStorage.length; i++) {
    var initials = localStorage.key(i);
    var score = localStorage.getItem(initials);

    var scoreEl = document.createElement("div")
    scoreEl.textContent = initials + " - " + score;
    scoreListEl.appendChild(scoreEl);
}

//clear scores button - clears saved data and refreshes page
clearScoresEl.addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "highscore.html";
})

//go back button - returns to the quiz home page
goBackEl.addEventListener("click", function() {
    window.location.href = "index.html";
})
