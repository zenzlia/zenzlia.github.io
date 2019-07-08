
$(document).ready(function() {
    $("#upButton").click(function(event) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
    var PAGES = ["navbar","about","projects","gallery","commissions","contact"];
   
    var pagePointer = 0;
    var URL = window.location.href.split("/")[0] + "//" + window.location.href.split("/")[2];
    var windowHeight = window.innerHeight;
    // var PAGESIZE = [0,$("about").position().top,windowHeight+(.1*windowHeight)];

    //[0,windowHeight+70,windowHeight*2+70,windowHeight*3+165,windowHeight*4+258,windowHeight*5+350];

    $(document).on('wheel', function(e) {
        
        var delta = e.originalEvent.deltaY;
    
        if (delta > 0 && pagePointer+1 < PAGES.length) {
            pagePointer += 1;
        } else if (delta < 0 && pagePointer > 0) {
            pagePointer -= 1;
        }
        window.scroll({
            top:  $("#" + PAGES[pagePointer]).offset().top,
            behavior: 'smooth'
        });
        // $("#" + PAGES[pagePointer])[0].scrollIntoView();
    });
});
