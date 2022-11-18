var startQuiz = document.getElementById("BeginQuiz")
var savescore = document.getElementById("saveScore")
var viewScores = document.getElementById("viewScores")
var playAgain = document.getElementById("playAgain")
var options = document.getElementById("options")
var message = document.getElementById("message")


var welcome = document.getElementById("welcome")
var quiz = document.getElementById("quiz")
var result = document.getElementById("result")

var timer = document.getElementById("timer")

var summary = document.getElementById("summary")
//interger at the begining of the game 
var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;

//game ends when count down to answer question end
function stopGame() {

    clearInterval(countdownTimer);

    timer.textContent = ""
    question.textContent = "Game Over"
    options.innerHTML = "";

    welcome.style.display = 'none';
    result.style.display = 'flex';
    quiz.style.display = 'none';

    summary.textContent = "Your score is: " + score
}


//Local storage for initials to be showed by scores once initials have been added
function onSaveScore(e) {
    var initial = document.getElementById("initials").value;

    if (initial !== "") {
        localStorage.setItem(initial, score);

        document.getElementById("initials").value = "";
    }
}



//To view scores on the page
function onViewScore(e) {
    window.locate.href = 'score.html';

}



//Responses given when answers are correct and wrong which intern increment or decrement the score
function onSelectAnswer(e) {

    console.log(e.target.textContent);
    var correctAnswer = questions[currentQuestion].answer;
    var userAnswer = e.target.textContent;

    if (correctAnswer === userAnswer) {
        score++;
        displayMessage('Correct :)')
    } else {
        score--;
        displayMessage('Incorrect :(')
    }

    displayQuestion();
}

//To show timer
function displayMessage(text) {

    message.textContent = text;
    setTimeout(function () {
        message.textContent = "";
    }, 1000);
}

//To display questions
//To stop the game if current question is equal to question length
//Loop to go through questions once one is answered
function displayQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        stopGame();
        return;
    }

    var question = questions[currentQuestion];
    document.getElementById("question").textContent = question.title

    options.innerHTML = "";

    for (var i = 0; i < question.choices.length; i++) {

        console.log(question.choices.length);
        var option = document.createElement("div");
        option.textContent = question.choices[i];
        option.onclick = onSelectAnswer;
        option.classList.add("options");

        options.appendChild(option);
    }
}

//On game screen to show amount of seconds left to play the game
//Timer countinues untill the game ends
function onStartGame() {

    secondsLeft = 75;
    currentQuestion = 0;
    score = 0;
    countdownTimer = setInterval(function () {

        if (secondsLeft > 0) {
            timer.textContent = secondsLeft + "seconds left";
        } else {
            stopGame();
        }
        secondsLeft--;
    }, 1000);

    welcome.style.display = 'none';
    result.style.display = 'none';
    quiz.style.display = 'flex';

    displayQuestion();
}




/*To allow content inside to the init function to load first on the screen
 before any others*/
function init() {

console.log("initialising the Quiz");
//Initialise the page on first load
startQuiz.addEventListener("click", onStartGame);
savescore.addEventListener("click", onSaveScore);
viewScores.addEventListener("click", onViewScore);
playAgain.addEventListener("click", onStartGame);

//To show the Welcome section
    welcome.style.display = 'flex';
}

init();