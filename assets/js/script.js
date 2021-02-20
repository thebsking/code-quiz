//declare variables
let timer = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let questionArea = document.querySelector("#question");
let selectionArea = document.querySelector("#options");
let userScore = 0;
let rightWrong = document.querySelector("#right-wrong");
let testContent = [
    {
        question: 'Commonly used data types DO NOT include',
        options: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed within ____',
        options: ['qutoes', 'curly braces', 'square brackets', 'parentheses'],
        answer: 'parentheses'
    },
    {
        question: 'What data types can be stored in an array?',
        options: ['strings', 'numbers', 'other arrays', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: 'Using the browser\'s dev tools, where would you find "local storage"?',
        options: ['console', 'sources', 'application', 'elements'],
        answer: 'application'
    },
    {
        question: 'What is the index for the first element of an array?',
        options: ['0', '-1', '1', 'A'],
        answer: '0'
    },
];
let timeLeft;
let scoreStore = window.localStorage;
let scoreArray = [];

//start button listener
startBtn.addEventListener('click', function(){
    countdown();
    runTheGame();
});

//countdown timer
function countdown() {
    timeLeft = 60;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = `${timeLeft} seconds remaining`;
  
      if (timeLeft === 0) {
      clearInterval(timeInterval);
      endGame();
      timer.textContent = "Time's up!";
    }}, 1000)
    
  };


function endGame(){

    rightWrong.textContent = "";
    userScore += timeLeft;
    questionArea.textContent = "Game Over. You're score is: " + userScore;
    timer.style.display = "none";
    document.querySelector("#high-score").style.display ='block';
    document.querySelector("#submit-score").addEventListener('click', function(event){
        event.preventDefault();
        var initials = document.querySelector("#initials").value;
        let finalScore = {initials: initials, score: userScore};
        let scoreList = scoreStore.getItem("scores")
        if (scoreList == null){
            scoreArray = [];
        } else {
            scoreArray = JSON.parse(scoreList)
        }
        scoreArray.push(finalScore);
        scoreStore.setItem("scores", JSON.stringify(scoreArray));

    })
    return;
}

 //content of the quiz 
function runTheGame () {
  //display quiz content
    startBtn.style.display = 'none';
    let q = 0;
    // if(q === 5){
    //     endGame();
    // }
    
    //display the question
    let currentQuestion = document.createElement("h2");
    currentQuestion.textContent = testContent[q].question;
    questionArea.appendChild(currentQuestion);
    let answerOptions;

    //display available options
    function showOptions (){
        for (var i = 0; i < testContent[0].options.length; i++){
        answerOptions = document.createElement("button")
        answerOptions.textContent = testContent[q].options[i];
        selectionArea.appendChild(answerOptions);
    }
};
    showOptions();

    function clearPlayArea(){
        questionArea.textContent = "";
        selectionArea.textContent= "";
    }

    //match user selection with correct answer 
    selectionArea.addEventListener('click', function(event){
        var chosenAnswer = event.target.textContent;
        if(chosenAnswer === testContent[q].answer){
            rightWrong.textContent = "That's correct!";
            q++;
            userScore += 10;
            clearPlayArea();
            if(q === 5){
                clearPlayArea();
                endGame(); 
                return;
            };
            currentQuestion.textContent = testContent[q].question;
            questionArea.appendChild(currentQuestion);

            showOptions();
        } else {
            rightWrong.textContent = "Sorry, that's wrong";
            q++;
            timeLeft -= 10;
            clearPlayArea();
            if(q === 5){
                clearPlayArea();
                endGame();
                return;
            };
            currentQuestion.textContent = testContent[q].question;
            questionArea.appendChild(currentQuestion);

            showOptions();
        }

    })

    
    
};