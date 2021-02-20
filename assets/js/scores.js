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
    scoreList.appendChild(listName);
    listScore.textContent = scoreArray[i].score;
    scoreList.appendChild(listScore);
}}

//create buttons to clear scores & play again 
let clearButton = document.createElement("button");
let playButton = document.createElement("button");
clearButton.textContent = "Clear All Scores";
playButton.textContent = "Play Again";

//append buttons to page
mainEl.appendChild(clearButton);
mainEl.appendChild(playButton);

//event listeners for buttons
clearButton.addEventListener("click", function (event){
    window.localStorage.clear();
    window.location.reload();
})
playButton.addEventListener("click", function(event){
    window.location.href = "./index.html"
})