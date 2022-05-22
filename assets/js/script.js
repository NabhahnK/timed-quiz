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

function changeH1(x) {
    document.getElementById("quiz")
}

function checkCurrentList() {
    var listOne = document.getElementById("one");
    var listTwo = document.getElementById("two");
    var listThree = document.getElementById("three");
    var listFour = document.getElementById("four");
    var listFive = document.getElementById("five");

    if (listOne.style.display === "block") {
        nextQuestion("one", "two");
    } else if (listTwo.style.display === "block") {
        nextQuestion("two", "three");
    } else if (listThree.style.display === "block") {
        nextQuestion("three", "four")
    } else if (listFour.style.display === "block") {
        nextQuestion("four", "five");
    } else {
        nextQuestion("five", "inputName");
    }
}

function checkAnswer(event) {
    var target = event.target;
    var state = target.getAttribute("data-state");

    if (state != null) {
        if (state === "correct") {
            console.log("right");
            checkCurrentList();
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