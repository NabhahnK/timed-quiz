var start = document.getElementById("start");
var time = 75;
var score = 0;
var question = [
    "What is your name?",
    "Is your name Bob?"
]

function startQuiz() {
    document.getElementById("start").style.display = "none";
}

start.addEventListener("click", function() {
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

