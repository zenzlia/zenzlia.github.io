$(document).ready(function() {
  $(".addButton").click(function(event) {
      var pressedButton = $(event.target);
      localStorage.setItem("mealBubble",pressedButton.parent().siblings()[1].id);
      window.location.href = "mealSelect.html";
  });


  $("#mealSelect td img").click(function(event) {
    //console.log($(event.target)[0].outerHTML.slice(22,imageHTML.length-12));
    var imageHTML = $(event.target)[0].outerHTML;
    localStorage.setItem("chosenImage",$(event.target)[0].outerHTML.slice(22,imageHTML.length-12));
    localStorage.setItem("timelineclick",false);
    window.location.href = "mealInfo.html";
  });

  var chosenBubble = localStorage.getItem("mealBubble");
  var childrenList;
  if(document.getElementById(chosenBubble) != null) {
    childrenList = document.getElementById(chosenBubble).parentElement.parentElement.parentElement.children[1].children[0].children;
  }
   
  var mealsChosen = localStorage.getItem("imageItems");
  if(mealsChosen != null && mealsChosen != "") {
    for(var i =1;i<mealsChosen.split(",").length;i++) {
      childrenList[i-1].innerHTML = '<img src="images/food/'+localStorage.getItem("imageItems").split(",")[i] + '">';
    }
  }
  
});
