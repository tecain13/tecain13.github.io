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
var highscorebar = document.getElementById("scorebutton");
var highscores = [];
var highscorepage = document.getElementById("highscoreContainer");

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
var score = 0;
var finalscore = 0;

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
    overalltime = setInterval(overallTimer, 1000);
}


// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}



//overall quiz timer
var seconds = 75;
var overalltime;

function overallTimer() {
    seconds--;
    document.getElementById('overalltime').innerHTML = seconds + "sec left";
    if (seconds === 0) {
        clearInterval(overalltime);
        scoreRender();
    }
}

//need to figure out how to prevent it from going negative, and how to introduce a penalty if question is wrong

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
        clearInterval(overalltime);
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
    finalscore = (score * seconds);
    highscores.push(finalscore);
    // calculate the amount of question percent answered by the user

    scoreDiv.innerHTML += "<p>" + finalscore + "</p>";

}

//score button
scorebutton.addEventListener("click", highscore);

function highscore() {
    for (var i = 0; i < highscores.length; i++) {
        console.log(highscores[i]);
        highscoreDiv.innerHTML += "<p>" + highscores[i] + "</p>";

    }
}

//add a pop-up box and individual p tag for high score
//p tag inside the for loop/
//high score div inner.html 