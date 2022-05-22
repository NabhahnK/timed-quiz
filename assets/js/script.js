var time = 1;
var score = 0;
var question = [
    "What is your name?",
    "Is your name Bob?"
]

var timer = setInterval(function () {
    if (time >= 0) {
        document.getElementById("timer").innerHTML = time;
        time--;
    } else {
        localStorage.setItem(name, score);
        clearInterval(timer);
    }
}, 1000);