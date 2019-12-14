function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .css({"width":"130%", "height":"100%", "margin-bottom":"1000px"});
            $('#small').css({"visibility":"visible"})
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function(){
    document.body.requestFullscreen();
    var countdown = 30 * 60 * 1000;
    var timerId = setInterval(function(){
    countdown -= 1000;
    var min = Math.floor(countdown / (60 * 1000));
    //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
    var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

    if (countdown <= 0) {
        alert("30 min!");
        clearInterval(timerId);
        //doSomething();
    } else {
        $("#countdown").html(min + ":" + sec);
    }

    }, 1000); //1000ms. = 1sec.
});