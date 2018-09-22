var month = 0;
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var firstDay = 5;
var year = 2018;

var eventList = []

function setMonth(newMonth) {
    month = newMonth;
    document.getElementById("monthLabel").innerHTML = monthNames[month] + " " + year.toString();
    var currDate = year.toString() + "-" + (month+1).toString() + "-01"
    var d = new Date(currDate);
    firstDay = d.getDay();
}

function resetCell(row, col) {
    var currCell = document.getElementById("cell-"+row.toString()+"-"+col.toString());
    currCell.removeChild(currCell.firstChild);
    currCell.classList.remove("off-month");
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

    if (thisMonth != month) {
        currCell.classList.add("off-month")
    }
    var content = document.createElement("div")
    content.innerHTML = date.toString();
    currCell.appendChild(content)
}

function setPrevMonth() {
    if (month == 0) {
        year--;
    }
    setMonth(((month-1)%12+12)%12);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            resetCell(i, j);
            initialiseCells(i, j)
        }
    }
}

function setNextMonth() {
    if (month == 11) {
        year++;
    }
    setMonth(((month+1)%12+12)%12);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            resetCell(i, j);
            initialiseCells(i, j)
        }
    }
}

function addEvent(n, d, m, y, l, ts) {
    console.log(ts);
    var newEvent = {
        name: n,
        day: d,
        month: m,
        year: y,
        location: l
    };
    eventList.push(newEvent);
}