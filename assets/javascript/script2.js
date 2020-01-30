//DOM Manipulation, failed

// variables
var times = ["8","9","10","11","12","1","2","3","4","5","6"]
var container = document.querySelector(".timecontainer")
var now = new Date("")
var hours = now.getHours()
var textArea = document.querySelector(".textarea")

for (var i = 0; i < times.length; i++) {
    var timeBlock = document.createElement("div")
    timeBlock.setAttribute("data-time", times[i]);
    timeBlock.setAttribute("id", "hour -" + times[i]);
    timeBlock.textContent = times[i];
    container.append(timeBlock);

    var cellTextTime = document.createTextNode(times[i]);
    var timeBlockColTime = document.createElement("td")
    timeBlockColTime.append(cellTextTime)

    var cellTextTime = document.createTextNode(times[i]);
    var timeBlockColTime = document.createElement("td")
    timeBlockColTime.append(cellTextTime)

    var cellTextTime = document.createTextNode(times[i]);
    var timeBlockColTime = document.createElement("td")
    timeBlockColTime.append(cellTextTime)
}

function myFunction() {
    var textArea = document.querySelector(".textarea").action;
    document.querySelector(".times").innerHTML = textArea;
}


//parent element to input element

//table head table row table columns

//data set for past, present, future depends on the time