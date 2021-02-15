var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var questionArea = document.querySelector("#question");
var selectionArea = document.querySelector("#options");

let testQuestions = [
    {
        question: "What does CSS stand for?",
        answers:{
            a: "Cascading Style Sheet",
            b: "Computer Style Sheet",
            c: "Computers Stupid Spelling",
            d: "Crunch Super Soap"
    }},
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: ""
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: ""
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: ""
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: ""
    },
];



function startGame() {
    for (var i = 0; i < testQuestions.length; i++) {
        questionArea.textContent = testQuestions[i].question;
        selectionArea.textContent = testQuestions[i].a;
    }; 
};