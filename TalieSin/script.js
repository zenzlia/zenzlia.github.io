$(document).ready(function() {
    var originalDate = new Date("12/9/2019");  
    var today = new Date();

    var Difference_In_Time = today.getTime() - originalDate.getTime(); 
  
    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    
    $("#days")[0].innerHTML = Math.floor(Difference_In_Days) ;

});
