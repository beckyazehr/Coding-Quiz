var scoreListEl = document.querySelector("#scoreList");
var goBackEl = document.querySelector("#goBack");
var clearScoresEl = document.querySelector("#clearScores");

for (var i = 0; i < localStorage.length; i++) {
    var initials = localStorage.key(i);
    var score = localStorage.getItem(initials);

    var scoreEl = document.createElement("div")
    scoreEl.textContent = initials + " - " + score;
    scoreListEl.appendChild(scoreEl);
}