//assignments
var currentQuestion = 0;
var timeleft = 60;

var mainContainerEl = document.getElementById("main-container");
var startScreenEl = document.getElementById("start");
var startBtnEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("questions")
var endScreenEl = document.getElementById("end");
var scoreEl = document.getElementById("score");
var initialBoxEl = document.getElementById("initial-box");
var saveBtnEl = document.getElementById("save-score");


var score = 0;

//question assignment
var questionArray = [
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    }, 
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
    {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correct: ""
    },
]