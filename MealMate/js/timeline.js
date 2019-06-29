$(document).ready(function() {
    $(".meal").click(function(event) {
       if(localStorage.getItem("imageItems") != null && $(event.target)[0].src != undefined) {
            localStorage.setItem("timelineclick",true);
            var imageHTML = $(event.target)[0].outerHTML;
            localStorage.setItem("chosenImage",$(event.target)[0].outerHTML.slice(22,imageHTML.length-6));
            window.location.href = "mealInfo.html";
       }
    });
      var mealSorter = {
        "vegan":[
            "pasta"
        ],
        "halal":[
            "fastfood",
            "pancakes",
            "bbq",
            "eggbenedict"
        ],
        "gluten-free":[
            "beefnoodles",
            "bbq"
        ],
        "peskatarian":[
            "eggbenedict"
        ],
        "vegetarian":[
            "pasta",
            "pancakes",
            "friedrice"
        ],
        "lactose intolerant":[
            "eggbenedict"
        ],
        "":[
          "bbq",
          "beefnoodles",
          "pancakes",
          "pasta",
          "fastfood",
          "friedrice",
          "macandcheese"
        ]
      };

    var chosenBubble = localStorage.getItem("mealBubble");
    var childrenList;
    if(document.getElementById(chosenBubble) != null) {
        childrenList = document.getElementById(chosenBubble).parentElement.parentElement.parentElement.children[1].children[0].children;
    } 
    $("#mealGenerator").click(function(event) {
        var mealList = document.getElementsByClassName("meal");
        var mealsChosen = localStorage.getItem("imageItems");
        var dietaryRequirements = localStorage.getItem("dietary").split(",");
        var listOfPreferredMeals = [];
        for(var i=0;i<dietaryRequirements.length;i++) {
            listOfPreferredMeals.push(mealSorter[dietaryRequirements[i]]);
        }
        //console.log(listOfPreferredMeals);
        if(mealsChosen != null && mealsChosen != "") {
          for(var i =1;i<mealsChosen.split(",").length;i++) {
             childrenList[i-1].innerHTML = '<img src="images/food/'+localStorage.getItem("imageItems").split(",")[i] + '">';
          }
        }
        for(var i=0;i<listOfPreferredMeals.length;i++) {
            for(var j=0;j<3;j++) {
                if(mealList[i].children[j].innerHTML == "" || mealList[i].children[j].innerHTML == '<img src="images/food/">') {
                    mealList[i].children[j].innerHTML ='<img src="images/food/'+listOfPreferredMeals[getRandomInt(listOfPreferredMeals.length)][i]+ '.png">';
                }
            }
        }
      });

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
});
