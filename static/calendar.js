var month = 0
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var firstDay = 5;

function setMonth(newMonth) {
    var d = new Date();
    month = newMonth;
    document.getElementById("monthLabel").innerHTML = monthNames[month];
}

function initialiseCells(row, col) {
    var date = (row*7 + col) - firstDay + 1;
    var prevMonth = (month-1)%12;
    var nextMonth = (month+1)%12;
    var thisMonth = month
    var currCell = document.getElementById("cell-"+row.toString()+"-"+col.toString());

    if (date < 1) {
        date = monthDays[prevMonth] + date;
        thisMonth = prevMonth;
    } else if (date > monthDays[month]) {
        date = date % monthDays[month];
        thisMonth = nextMonth;
    }

    var content = document.createElement("div")
    content.innerHTML = date.toString();
    currCell.appendChild(content)
}