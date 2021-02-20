//declare variables
let scoreString = window.localStorage.getItem(("scores"));
let scoreArray = JSON.parse(scoreString);
let scoreList = document.querySelector("#scores-list")


//display scores
for (var i = 0; i < scoreArray.length; i++) {
    let listName = document.createElement("li");
    let listScore = document.createElement("li");
    listName.textContent = scoreArray[i].initials;
    scoreList.appendChild(listName);
    listScore.textContent = scoreArray[i].score;
    scoreList.appendChild(listScore);
}