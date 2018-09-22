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
    while (currCell.firstChild) {
        currCell.removeChild(currCell.firstChild);
    }
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
        currCell.classList.add("off-month");
    }
    var content = document.createElement("div")
    content.innerHTML = date.toString();
    content.classList.add("dayNumber");
    currCell.appendChild(content);

    for (let i = 0; i < eventList.length; i++) {
        let e = eventList[i];
        if (e.day == date && e.month == thisMonth+1 && e.year == year) {
            giveCellEvent(currCell, e);
        }
    }
}

function setPrevMonth() {
    if (month == 0) {
        year--;
    }
    setMonth(((month-1)%12+12)%12);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            resetCell(i, j);
            initialiseCells(i, j);
        }
    }
    updateTags();
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
    updateTags();
}

function addEvent(i, n, y, m, d, l) {
    var newEvent = {
        id: i,
        name: n,
        day: d,
        month: m,
        year: y,
        location: l,
        tags: []
    };
    eventList.push(newEvent);
}

function addEventTag(id, tag) {
    for (var i = 0; i < eventList.length; i++) {
        if (eventList[i].id == id) {
            eventList[i].tags.push(tag);
        }
    }
}

function giveCellEvent(cell, event) {
    var content = document.createElement("div");
    content.innerHTML = event.name;
    content.classList.add("event");
    for (let i = 0; i < event.tags.length; i++) {
        content.classList.add("event-" + event.tags[i]);
    }

    cell.appendChild(content);
}

function updateTags() {
    var socs = document.getElementById("society-checks").childNodes;
    var tags = document.getElementById("tag-checks").childNodes;
    var socList = [];
    var tagList = []

    for (var i = 0; i < socs.length; i++) {
        if (socs[i].classList) {
            if (socs[i].classList.contains("form-check")) {
                for (let j = 0; j < socs[i].childNodes.length; j++) {
                    let currNode = socs[i].childNodes[j];
                    if (currNode.classList) {
                        if (currNode.classList.contains("form-entry")) {
                            if (currNode.checked) {
                                socList.push(currNode.getAttribute("id"));
                            }
                        }
                    }
                }
            }
        }
    }

    for (var i = 0; i < tags.length; i++) {
        if (tags[i].classList) {
            if (tags[i].classList.contains("form-check")) {
                for (let j = 0; j < tags[i].childNodes.length; j++) {
                    let currNode = tags[i].childNodes[j];
                    if (currNode.classList) {
                        if (currNode.classList.contains("form-entry")) {
                            if (currNode.checked) {
                                console.log(currNode.getAttribute("id"))
                                tagList.push(currNode.getAttribute("id"))
                            }
                        }
                    }
                }
            }
        }
    }

    displayEvents(socList, tagList);
}

function displayEvents(socs, tags) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            var currNode = document.getElementById("cell-"+i.toString()+"-"+j.toString());
            for (var n = 1; n < currNode.childNodes.length; n++) {
                var currDiv = currNode.childNodes[n];
                var valid = 1;

                if (socs.length > 0) {
                    // valid = 0;
                    // console.log(currDiv.classList)
                    // for (let t = 0; t < currDiv.dataset.tags.length; t++) {
                    //     if (socs.indexOf(currDiv.dataset.tags[0]) >= 0) {
                    //         valid = 1;
                    //     }
                    // }
                }

                if (tags.length > 0) {
                    valid = 0;
                    for (let p = 0; p < tags.length; p++) {
                        if (currDiv.classList.contains("event-"+tags[p])) {
                            valid = 1;
                        }
                    }
                }
                console.log(valid)

                if (valid == 0) {
                    currDiv.style.display = "none";
                } else {
                    currDiv.style.display = "inline-block";
                }
            }
        }
    }
}