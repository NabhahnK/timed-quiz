var start = document.getElementById("start");
var mainEl = document.getElementById("main");
var time = 75;
var score = 0;
var question = [
    "What is your name?",
    "Is your name Bob?"
]

function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("one").style.display = "block";
}

function nextQuestion(x, y) {
    document.getElementById(x).style.display = "none";
    document.getElementById(y).style.display = "block";
}

function checkAnswer(event) {
    var target = event.target;
    var state = target.getAttribute("data-state");

    if (state != null) {
        if (state === "correct") {
            console.log("right");
        } else {
            console.log("Else");
        }
    }

    if (target != "button") {
        return
    }
}

start.addEventListener("click", function () {
    startQuiz();
    var timer = setInterval(function () {
        if (time >= 0) {
            document.getElementById("timer").innerHTML = time;
            time--;
        } else {
            localStorage.setItem(name, score);
            clearInterval(timer);
        }
    }, 1000);
});

mainEl.addEventListener("click", checkAnswer);