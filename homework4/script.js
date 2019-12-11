// select necessary elements
var begin = document.getElementById("begin");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var questionImg = document.getElementById("questionImg");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var counter = document.getElementById("counter");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var highscorebar = document.getElementById("scorebutton");
var highscores = [];
var highscorepage = document.getElementById("highscoreContainer");

// create questions
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        imgSrc: "img/datatype.jpg",
        optionA: "Alerts",
        optionB: "Numbers",
        optionC: "Booleans",
        correct: "A"
    }, {
        question: "The condition in an if / else statement is enclosed within ____.",
        imgSrc: "img/brackets.jpg",
        optionA: "Quotes",
        optionB: "Parentheses",
        optionC: "Curly Brackets",
        correct: "B"
    }, {
        question: "JQuery was originally called what?",
        imgSrc: "img/jquery.png",
        optionA: "Javascript",
        optionB: "Querytime",
        optionC: "JSelect",
        correct: "C"
    }, {
        question: "Who is credited as the creator of Javascript?",
        imgSrc: "img/js.png",
        optionA: "Bill Gates",
        optionB: "Steve Wozniak",
        optionC: "Brendan Eich",
        correct: "C"
    },
    {
        question: "There are ____ different coding languages estimated to be in existence.",
        imgSrc: "img/curly.png",
        optionA: "700",
        optionB: "900",
        optionC: "300",
        correct: "A"
    }
];

// create some variables
var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var count = 0;
var score = 0;
var finalscore = 0;

// display a question
function displayQuestion() {
    let q = questions[currentQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    questionImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
}

begin.addEventListener("click", beginQuiz);

// begin quiz
function beginQuiz() {
    begin.style.display = "none";
    displayQuestion();
    quiz.style.display = "block";
    displayProgress();
    overalltime = setInterval(overallTimer, 1000);
}


// display progress
function displayProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}



//overall quiz timer
var seconds = 76;
var overalltime;

function overallTimer() {
    seconds--;
    document.getElementById('overalltime').innerHTML = seconds + "sec left";
    if (seconds === 0) {
        clearInterval(overalltime);
        calcScore();
    } //else if (answerIsWrong());
    //overallTimer = document.getElementById('overalltime').innerHTML = seconds - 10;

}


//need to figure out how to introduce a penalty if question is wrong

// check Anwer
function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
        overallTimer = document.getElementById('overalltime').innerHTML = seconds - 10;

    }
    count = 0;
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(overalltime);
        calcScore();
    }
}

// if the answer is correct
function answerIsCorrect() {
    document.getElementById(currentQuestion).style.backgroundColor = "#0f0";
}


// if the answer is Wrong
function answerIsWrong() {
    document.getElementById(currentQuestion).style.backgroundColor = "#f00";
    //overallTimer = document.getElementById('overalltime').innerHTML = seconds - 10;
}


// calculate final score
function calcScore() {
    scoreDiv.style.display = "block";
    finalscore = (score * seconds);
    highscores.push(finalscore);
    // calculate the amount of questions answered corrected and time remaining being a factor

    scoreDiv.innerHTML += "<p>" + "Your score is" + " " + finalscore + "</p>";

}

//high scores button
scorebutton.addEventListener("click", highscore);

function highscore() {
    for (var i = 0; i < highscores.length; i++) {
        console.log(highscores[i]);
        var highscoreContainer = document.getElementById("highscoreContainer");

        highscoreContainer.innerHTML = highscores[i];

        //highscoreContainer.innerHTML += "<p>" + highscores[i] + "</p>";

    }
}

//review previous high scores
highscorebar.addEventListener("click", highscore);

localStorage.setItem("highscore", highscore);

//add a pop-up box and individual p tag for high score
//p tag inside the for loop/
//high score div inner.html 