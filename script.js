
$(document).ready(function() {
    $("#upButton").click(function(event) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
    var PAGES = ["about","projects","gallery","commissions","contact"];
    var pagePointer = -1;
    var currentScroll = document.documentElement.scrollTop;
    var URL = location.href;
    window.onscroll = function() {
        var tempPtr;
        if(document.documentElement.scrollTop > currentScroll && pagePointer > -1.5) {
            pagePointer += 1;
            // tempPtr = Math.floor(pagePointer);
        } else {
            pagePointer -= 1;
            // tempPtr = Math.round(pagePointer);
        }
        // var elmnt = document.getElementById((PAGES[tempPtr]));
        console.log("Page Pointer: " + pagePointer);
        // elmnt.scrollIntoView();+ " Rounded: " + tempPtr);
    };

});
