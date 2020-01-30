$(document).ready(function() {
    let eightAM = localStorage.getItem("8AM"); // local storage variable containing local storage data
    if (eightAM !== null) {
        $("#8").val(eightAM);
    } 
    let nineAM = localStorage.getItem("9AM");
    if (nineAM !== null) {
        $("#9").val(nineAM);
    
    }
});

$(".save-8").on("click", function() {
    localStorage.setItem("8AM", $("#8").val());  
}) 
$(".set-8").on("click", function() {
    localStorage.setItem("8AM", "");
    $("#8").val("");
})

$(".save-9").on("click", function() {
    localStorage.setItem("9AM", $("#9").val());  
}) 
$(".set-9").on("click", function() {
    localStorage.setItem("9AM", "");
    $("#9").val("");
})

$(".save-10").on("click", function() {
    localStorage.setItem("10AM", $("#10").val());  
}) 
    localStorage.setItem("10AM", "");
    $("#10").val("");
})

$(".save-11").on("click", function() {
    localStorage.setItem("11AM", $("#11").val());  
}) 
$(".set-11").on("click", function() {
    localStorage.setItem("11AM", "");
    $("#11").val("");
})

$(".save-12").on("click", function() {
    localStorage.setItem("12AM", $("#12").val());  
}) 
$(".set-12").on("click", function() {
    localStorage.setItem("12AM", "");
    $("#12").val("");
})

$(".save-1").on("click", function() {
    localStorage.setItem("1PM", $("#1").val());  
}) 
$(".set-1").on("click", function() {
    localStorage.setItem("1PM", "");
    $("#1").val("");
})

$(".save-2").on("click", function() {
    localStorage.setItem("2PM", $("#8").val());  
}) 
$(".set-2").on("click", function() {
    localStorage.setItem("2PM", "");
    $("#2").val("");
})

$(".save-3").on("click", function() {
    localStorage.setItem("3PM", $("#3").val());  
}) 
$(".set-3").on("click", function() {
    localStorage.setItem("3PM", "");
    $("#3").val("");
})

$(".save-4").on("click", function() {
    localStorage.setItem("4PM", $("#4").val());  
}) 
$(".set-4").on("click", function() {
    localStorage.setItem("4PM", "");
    $("#4").val("");
})

$(".save-5").on("click", function() {
    localStorage.setItem("5PM", $("#5").val());  
}) 
$(".set-5").on("click", function() {
    localStorage.setItem("5PM", "");
    $("#5").val("");
});