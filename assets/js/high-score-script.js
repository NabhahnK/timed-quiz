function highscoreTable() {
    for (var i = 0; i < localStorage.length; i++) {
        console.log("test3");
        var table = document.getElementById("highscoreTable");
        var keys = localStorage.key(i);
        var values = localStorage[keys];
        var newRow = document.createElement("tr");
        var valueOne = document.createElement("td");
        var valueTwo = document.createElement("td");
        valueOne.innerHTML = keys;
        newRow.appendChild(valueOne);
        valueTwo.innerText = values;
        newRow.appendChild(valueOne);
        newRow.appendChild(valueTwo);
        table.appendChild(newRow);
    }
}

if (localStorage) {
    highscoreTable();
}