var total;

function displayAmount() {
    if (total >= 0) {
        document.getElementById("amountDisplay").innerHTML =  "$" + Math.round(total * 100) / 100;
    } else {
        document.getElementById("amountDisplay").innerHTML =  "-$" + Math.abs(Math.round(total * 100) / 100);
    }
}

$(document).ready(function() {
    total = localStorage.getItem("amount");
    if (total != null) {
        displayAmount();
        total = parseFloat(total);
    }
    $("#addButton").click(function(event) {
        var toOwe = prompt("How much did they pay?");
        if (total == null && toOwe != null) {
            total = parseFloat(toOwe);
        } else if (toOwe != null) {
            total += parseFloat(toOwe);
        }
        localStorage.setItem("amount", total);
        displayAmount();
    }); 

    $("#subButton").click(function(event) {
        var toOwe = prompt("How much did you pay?");
        if (total == null && toOwe != null) {
            total = parseFloat(toOwe);
        } else if (toOwe != null) {
            total -= parseFloat(toOwe);
        }
        localStorage.setItem("amount", total);
        displayAmount();
    }); 
});