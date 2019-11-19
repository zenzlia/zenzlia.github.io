
$(document).ready(function() {

    var data = {
        "ABOUT": "about"
    };
    $("#upButton").click(function(event) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
    var PAGES = ["navbar","about","projects","gallery","commissions","contact"];
    $("a").click(function(event) {
        localStorage.setItem("k", $(event.target)[0].innerText);
        $('#' + data[localStorage.getItem("k")]).css('visibility', 'visible');
    });
});
