function showTheTime() {
    var s = moment().tz("America/Los_Angeles").format('hh:mm:ss a');    
    document.getElementById("time").innerHTML = s;
}

showTheTime(); // for the first load
setInterval(showTheTime, 250); // update it periodically