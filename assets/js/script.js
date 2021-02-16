//declare variables
let timer = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let questionArea = document.querySelector("#question");
let selectionArea = document.querySelector("#options");
let userScore = 0;
let testContent = [
    {
        question: '',
        options: [''],
        answer: ''
    },
    {
        question: '',
        options: [''],
        answer: ''
    },
    {
        question: '',
        options: [''],
        answer: ''
    },
    {
        question: '',
        options: [''],
        answer: ''
    },
    {
        question: '',
        options: [''],
        answer: ''
    },
];

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

