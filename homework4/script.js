// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

// create our questions
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        imgSrc: "img/datatype.jpg",
        choiceA: "Alerts",
        choiceB: "Numbers",
        choiceC: "Booleans",
        correct: "A"
    }, {
        question: "The condition in an if / else statement is enclosed within ____.",
        imgSrc: "img/brackets.jpg",
        choiceA: "Quotes",
        choiceB: "Parentheses",
        choiceC: "Curly Brackets",
        correct: "B"
    }, {
        question: "JQuery was originally called what?",
        imgSrc: "img/jquery.png",
        choiceA: "Javascript",
        choiceB: "Querytime",
        choiceC: "JSelect",
        correct: "C"
    }, {
        question: "Who is credited as the creator of Javascript?",
        imgSrc: "img/js.png",
        choiceA: "Bill Gates",
        choiceB: "Steve Wozniak",
        choiceC: "Brendan Eich",
        correct: "C"
    },
    {
        question: "There is an estimated ___ coding languages in existence.",
        imgSrc: "img/curly.png",
        choiceA: "700",
        choiceB: "900",
        choiceC: "300",
        correct: "A"
    }
];

// create some variables
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 15; // 15seconds
var gaugeWidth = 150; // 150px wide
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;


// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}



//overall quiz timer
var seconds = 80;
var overalltime = setInterval(overallTimer, 1000);

function overallTimer() {
    document.getElementById('overalltime').innerHTML = seconds + "sec left";
    seconds--;
    if (seconds == -1) {
        clearInterval(TIMER);
        scoreRender();
    }
}

//need to figure out how to prevent it from going negative, and how to introduce a penalty if question if wrong

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";


    // calculate the amount of question percent answered by the user
    var scorePerCent = Math.round(100 * score / questions.length);

    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
