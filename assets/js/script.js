//declare variables
let timer = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let questionArea = document.querySelector("#question");
let selectionArea = document.querySelector("#options");
let userScore = 0;
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

//start button listener
startBtn.addEventListener('click', function(){
    countdown();
    runTheGame();
});

//countdown timer
function countdown() {
    let timeLeft = 60;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = `${timeLeft} seconds remaining`;
  
      if (timeLeft === 0) {
      clearInterval(timeInterval);
      timer.textContent = "Time's up!";
    }}, 1000)
    
  };

 //content of the quiz 
function runTheGame () {
  //display quiz content
    startBtn.style.display = 'none';
    let q = 0;
    
    //display the question
    let currentQuestion = document.createElement("h2");
    currentQuestion.textContent = testContent[q].question;
    questionArea.appendChild(currentQuestion);
    // function resetPlayArea() {
    //     answerOptions.textContent = '';
    //     currentQuestion.textContent = ''; 
    // };

    //display available options
    for (var i = 0; i < testContent[0].options.length; i++){
        let answerOptions = document.createElement("button");
        answerOptions.textContent = testContent[q].options[i];
        selectionArea.appendChild(answerOptions);
        console.log(answerOptions)
};

    selectionArea.addEventListener('click', function(event){
        var chosenAnswer = event.target.textContent;
        
        if(chosenAnswer === testContent[q].answer){
            console.log('correct');
            q++;
            console.log(q);
        } else {
            console.log('wrong');
            q++;
            console.log(q);
        }
    })
};