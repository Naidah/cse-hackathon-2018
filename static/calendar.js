var month = 0;
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var firstDay = 5;
var year = 2018;

function setMonth(newMonth) {
    month = newMonth;
    document.getElementById("monthLabel").innerHTML = monthNames[month];
    var currDate = year.toString() + "-" + (month+1).toString() + "-01"
    console.log(currDate)
    var d = new Date(currDate);
    console.log(d)
    firstDay = d.getDay();
}

function resetCell(row, col) {
    var currCell = document.getElementById("cell-"+row.toString()+"-"+col.toString());
    currCell.removeChild(currCell.firstChild);
}

function initialiseCells(row, col) {
    var date = (row*7 + col) - firstDay + 1;
    var prevMonth = ((month-1)%12+12)%12;
    var nextMonth = ((month+1)%12+12)%12;
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

function setPrevMonth() {
    setMonth(((month-1)%12+12)%12);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            resetCell(i, j);
            initialiseCells(i, j)
        }
    }
}

function setNextMonth() {
    setMonth(((month+1)%12+12)%12);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            resetCell(i, j);
            initialiseCells(i, j)
        }
    }
}