window.onload = function() {
    t = document.getElementById("calendar");
    for (let i = 0; i < 6; i++) {
        let newRow = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let newCell = document.createElement("td");
            let cellInfo = document.createElement("div");
            cellInfo.innerHTML = i.toString() + ", " + j.toString();
            newCell.appendChild(cellInfo);
            newRow.appendChild(newCell);
        }
        t.appendChild(newRow);
    }
}