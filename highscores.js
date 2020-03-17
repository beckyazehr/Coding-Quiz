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

clearScoresEl.addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "highscore.html";
})

goBackEl.addEventListener("click", function() {
    window.location.href = "index.html";
})
