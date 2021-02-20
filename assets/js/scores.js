//declare variables
let scoreString = window.localStorage.getItem(("scores"));
let scoreArray = JSON.parse(scoreString);
let scoreList = document.querySelector("#scores-list")
let mainEl = document.querySelector("main")

//display scores
if (!scoreArray) {
    let noScores = document.createElement("h2");
    noScores.textContent = "No Scores Yet";  
    mainEl.appendChild(noScores);
} else {
for (var i = 0; i < scoreArray.length; i++) {
    let listName = document.createElement("li");
    let listScore = document.createElement("li");
    listName.textContent = scoreArray[i].initials;
    scoreList.appendChild(listName).classList.add("name-col");
    listScore.textContent = scoreArray[i].score;
    scoreList.appendChild(listScore).classList.add("score-col");
}}

//create buttons to clear scores & play again 
let clearButton = document.createElement("button");
let playButton = document.createElement("button");
clearButton.textContent = "Clear All Scores";
playButton.textContent = "Play Again";

//append buttons to page
mainEl.appendChild(clearButton).classList.add("scores-btn");
mainEl.appendChild(playButton).classList.add("scores-btn");

//event listeners for buttons
clearButton.addEventListener("click", function (event){
    window.localStorage.clear();
    window.location.reload();
})
playButton.addEventListener("click", function(event){
    window.location.href = "./index.html"
})