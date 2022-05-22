var timer;
var form = document.getElementById("submit");
var start = document.getElementById("start");
var mainEl = document.getElementById("main");
var time = 74;
var score = 0;
var question = [
    "Does a var create a variable",
    "What is one way of making a loop?",
    "Can you make a button with out JS?",
    "Is jQuary needed to make websites?",
    "Can you do without BootStrap?"
]

function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("one").style.display = "block";
    changeH1(0);
}

function nextQuestion(x, y) {
    document.getElementById(x).style.display = "none";
    document.getElementById(y).style.display = "block";
}

function changeH1(x) {
    document.getElementById("quiz").textContent = question[x];
}

function checkCurrentList() {
    var listOne = document.getElementById("one");
    var listTwo = document.getElementById("two");
    var listThree = document.getElementById("three");
    var listFour = document.getElementById("four");

    if (listOne.style.display === "block") {
        nextQuestion("one", "two");
        changeH1(1);
    } else if (listTwo.style.display === "block") {
        nextQuestion("two", "three");
        changeH1(2);
    } else if (listThree.style.display === "block") {
        nextQuestion("three", "four")
        changeH1(3);
    } else if (listFour.style.display === "block") {
        nextQuestion("four", "five");
        changeH1(4);
    } else {
        nextQuestion("five", "inputName");
        document.getElementById("indecator").textContent = "Input your initials.";
        document.getElementById("indecator").style.borderTop = "none"
        document.getElementById("quiz").textContent = "";
        clearInterval(timer);

    }
}

function checkAnswer(event) {
    var target = event.target;
    var state = target.getAttribute("data-state");

    if (state != null) {
        if (state === "correct") {
            document.getElementById("indecator").textContent = state;
            score += 1;
            checkCurrentList();
        } else {
            document.getElementById("indecator").textContent = state;
            score -= 5;
            checkCurrentList();
        }
    }

    if (target != "button") {
        return
    }
}

start.addEventListener("click", function () {
    startQuiz();
    timer = setInterval(function () {
        if (time >= 0) {
            document.getElementById("timer").innerHTML = time;
            time--;
        } else {
            var ulEls = document.querySelectorAll("ul");
            for (var i = 0; i < ulEls.length; i++) {
                ulEls[i].style.display = "none";
            }
            nextQuestion("five", "inputName");
            document.getElementById("indecator").textContent = "Input your initials.";
            document.getElementById("indecator").style.borderTop = "none"
            document.getElementById("quiz").textContent = "";
            clearInterval(timer);
        }
    }, 1000);
});


mainEl.addEventListener("click", checkAnswer);
form.addEventListener("click", function () {
    var name = document.getElementById("initials").value;
    localStorage.setItem(name, score);
    location.href='./high-score.html';
});
