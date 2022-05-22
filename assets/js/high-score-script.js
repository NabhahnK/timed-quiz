function highscoreTable() {
    if (localStorage != null) {
        for (var i; i < localStorage.length; i++) {
            var table = document.getElementById("highscoreTable");
            var key = localStorage.key(i);
            var value = localStorage[key];
            var newRow = document.createElement("tr");
            var valuesForRow = createElement("td");
            valuesForRow.innerText = key;
            newRow.appendChild(valuesForRow);
            valuesForRow.innerText = value;
            newRow.appendChild(valuesForRow);
            table.appendChild(newRow);
        }
    }
}

highscoreTable();