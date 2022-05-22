var start = document.getElementById("start");
var time = 75;
var score = 0;
var question = [
    "What is your name?",
    "Is your name Bob?"
]

start.addEventListener("click", function() {
    console.log("test");
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

