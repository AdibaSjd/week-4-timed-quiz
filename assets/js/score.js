var scoresheet = document.getElementById('result1')
var BacktoQuiz = document.getElementById('BacktoQuiz')

//sends user back to the start of the quiz
function onBacktoQuiz() {
window.location.href = 'index.html'
}

//saves scores to local storage - creates a stop once local storage reaches 5 on a page
var scores = []
    for (var i = 0; i < localStorage.length; i++) {

        if (i >= 5){
             break;
        }

    
//stores initials next to scores in local storage
var initials =localStorage.key(i);
var score = localStorage.getItem(initials);

//scores and initials shown on the page
var result = document.createElement("div")
result.classList.add('result1');

result.innerHTML = `
<div class= "result">
<div class="score-item">${initials}</div>
<div class="score-item">${score}</div>
</div>`
scoresheet.appendChild(result);
 }

//click added to navigate back to quiz

acktoQuiz.addEventListener("click", BacktoQuiz);




