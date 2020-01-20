let TOTAL_PRET, PRET_MOD, RATE;

let ICON = 'click.png';
let ICON_DOWN = 'based.png';

let intervalId;

function disable(clicked) {
    $(clicked).off("click");
    $(clicked).attr('disabled', true); 
    $(clicked).removeClass("purchase");
}

function change_values(mod, newRate) {
    if (mod > PRET_MOD) {
        PRET_MOD = mod;
    }

    if (newRate < RATE) {
        RATE = newRate;
    }
}

function change_pret(type) {
    switch (type) {
        case "big":
            change_values(10, RATE);
            $("#pret").css( "width", "60%" );
            break;
        case "rainbow":
            change_values(15, 500);    
            ICON_DOWN = 'help.gif';
            ICON = 'help.gif';
            break;
        case "human":
            change_values(100, 200);
            break;
        case "uwu":
            change_values(150, 50);
            break;

    }
    clearInterval(intervalId);
    // Start new interval
    startInterval(RATE);
}

$(document).ready(function() {
    TOTAL_PRET = parseInt(localStorage.getItem("TOTAL"));
    if (TOTAL_PRET == null) {
        TOTAL_PRET = 0;
    }
    
    PRET_MOD = parseInt(localStorage.getItem("MOD"));
    if (PRET_MOD == null) {
        PRET_MOD = 1;
    }

    RATE = parseInt(localStorage.getItem("RATE"));
    if (RATE == null) {
        RATE = 1000;
    }

    startInterval(RATE);

    $("#pret").click(function(event) {
		var pressedButton = $(event.target);
        TOTAL_PRET += 1 * PRET_MOD;
        pressedButton.attr('src', ICON);
        $("#amount")[0].innerHTML = TOTAL_PRET;

    });
    
    //Save before exiting
    window.onbeforeunload = function() {
        localStorage.setItem("TOTAL", TOTAL_PRET);
        localStorage.setItem("MOD", PRET_MOD);
        localStorage.setItem("RATE", RATE);
    };
    $("li, #amount").click(function(event) {
        var clicked = $(event.target);
        var amount;
        if (clicked[0].id == "amount") {
            amount = parseInt(clicked[0].id);
            clicked = clicked.parents()[0];
        } else {
            amount = parseInt(clicked[0]["childNodes"][1].innerHTML);
        }

        if (amount <= TOTAL_PRET) {
            TOTAL_PRET -= amount;
            $("#amount")[0].innerHTML = TOTAL_PRET;
            change_pret(clicked[0]["id"]);
            disable(clicked);
        }
    });
});

function startInterval(RATE) {
    // Store the id of the interval so we can clear it later
    intervalId = setInterval(function(){
        TOTAL_PRET += 1;
        $("#amount")[0].innerHTML = TOTAL_PRET;
    }, RATE);
  }

function count() {
    setInterval(function(){
        $("#pret")[0].src = ICON_DOWN;
    }, 500); //Refresh the button every 0.5 seconds

}