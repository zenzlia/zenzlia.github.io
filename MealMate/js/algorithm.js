$(document).ready(function() {
  var mealChanger = {
    "fastfood": {
      "title": "Fast Food",
      "recipe": [
        "Cook the patties",
        "Melt the cheese",
        "When patties are ready, remove and place aside with vegetables",
        "preboil your oil at 200 degrees",
        "slice potatoes into small slices",
        "add potatoes into oil for 10 minutes or until brown"
      ],
      "image": "<img id='image' src=images/food/fastfood.png>",
      "ingredients": [
        "patties",
        "cheese",
        "lettuce",
        "oil (200mg)",
        "potatoes x5",
        "bread buns"
      ],
      "info": "A fast meal that is easy to make, your kids will love it but your heart will not"
    },
    "beefnoodles": {
      "title": "Beef Noodles",
      "recipe": [
        "Boil noodles in pot until soft",
        "cook beef mince on pan until brown",
        "add sauce into bowl",
        "add mince, noodles and stir",
        "serve with corriader and enjoy",
        "can I go to sleep now"
      ],
      "image": "<img id='image' src=images/food/beefnoodles.png>",
      "ingredients": [
        "egg noodles",
        "beef mince (200g)",
        "mushrooms",
        "chicken broth",
        "mayonaise"
      ],
      "info": "A meal that can last you for weeks if you're willing to risk small ouchies in your stomach"
    },
    "macandcheese": {
      "title": "Mac and Cheese",
      "recipe": [
        "preheat oven to 200 degrees",
        "boil maccaroni until soft",
        "add cheese",
        "I'm tired but add soft maccaroni to the cheese when soft",
        "mix together until sauce is covering all maccaroni",
        "place in oven for 20 minutes"
      ],
      "image": "<img id='image' src=images/food/macandcheese.png>",
      "ingredients": [
        "macaroni",
        "chedder cheese"
      ],
      "info": "Contains Cheese and Milk \n 875 calories"
    },
    "pasta": {
      "title": "Simple Pasta Dish",
      "recipe": [
        "heat up hot water",
        "add hot water to pot",
        "add mince to pan and cook until brown",
        "add tomato sauce to pan",
        "add any desired spices",
        "when pasta is soft, add to pan and stir to your liking"
      ],
      "image": "<img id='image' src=images/food/pasta.png>",
      "ingredients": [
        "tomato sauce",
        "spaghetti pasta",
        "beef mince (200gm)",
        "any other desired spices"
      ],
      "info": "Contains Meat \n Glycemic Index of 45, Glycemic Load is 22,"
    },
    "bbq": {
      "title": "BBQ Skewers",
      "recipe": [
        "Add meat skewers into barbecue for 30 minutes",
        "Chop apples and put into bowl",
        "Add marinade to bowl",
        "Mix marinade until nice",
        "When skewers are ready, dip into marinade and cook for another 10 minutes",
        "Place skewers onto plate and serve with barbecue sauce"
      ], 
      "image": "<img id='image' src=images/food/bbq.png>",
      "ingredients": [
        "meat skewers",
        "marinade",
        "apples",
        "barbecue sauce"
      ],
      "info": "Contains meat and egg"
    },
    "eggbenedict": {
      "title": "Egg Benedict",
      "recipe": [
        "Boil water",
        "Add vinegar into water",
        "Crack eggs into pot",
        "Cook sauce until yellow",
        "When eggs are ready, add to plate and top with sauce",
        "Add garnish and serve to the tutors for an auto GPA 7"
      ],
      "image": "<img id='image' src=images/food/eggbenedict.png>",
      "ingredients": [
        "egg sauce",
        "two eggs",
        "garnishes"
      ],
      "info": "Contains eggs and milk\nServes 2"
    },
    "friedrice": {
      "title": "Fried Rice",
      "recipe": [
        "Put rice in rice cooker and leave cooking",
        "Chop up vegetables and place aside in a bowl",
        "Crack egg on pan and scramble",
        "Add vegetables and mix with egg",
        "Once vegetables are mixed, add rice, soy sauce and sesame sauce",
        "Mix together until soy sauce is fully mixed then serve in small bowls"
      ],
      "image": "<img id='image' src=images/food/friedrice.png>",
      "ingredients": [
        "Carrots",
        "Frozen Peas",
        "Jasmine Rice",
        "Soy Sauce",
        "Sesame Sauce"
      ],
      "info": "Contains Soy, Milk \n Serves 4"
    },
    "pancakes": {
      "title": "Pancakes",
      "recipe": [
        "Beat eggs in bowl",
        "Add flour",
        "Mix in bowl until egg can no longer be seen",
        "Preheat pan and add olive oil",
        "Add tablespoon of mix onto pan",
        "Flip when half the pancakes are bubbles"
      ], "image": "<img id='image' src=images/food/pancakes.png>",
      "ingredients": [
        "Egg x3",
        "Milk",
        "Butter",
        "Whipped Cream"
      ],
      "info":"A tasty snack for the family\n Contains Egg and Milk"
    }
  }
    //Sets Meals based on what was clicked
    var mealChosen = localStorage.getItem("chosenImage");
    $("#image")[0].outerHTML = mealChanger[mealChosen]["image"];
    var stepsArr = document.getElementsByClassName("steps");
    // console.log(stepsArr[0].innerHTML);
    for(var i=0;i<mealChanger[mealChosen]["recipe"].length;i++) {
        stepsArr[i].innerHTML = mealChanger[mealChosen]["recipe"][i];
    }
    $("#mealTitle")[0].innerHTML = mealChanger[mealChosen]["title"];
    $("#healthInfo")[0].innerHTML = mealChanger[mealChosen]["info"];
    for(var i=0;i<mealChanger[mealChosen]["ingredients"].length;i++) {
        var $item = $('<li>' + mealChanger[mealChosen]["ingredients"][i] + '</li>');
        $("#ingredients")[0].append($item[0]);
    }
    //If add meal button is implemented
    $(".addMeal").click(function(event) {
      var items = [];
      if(localStorage.getItem("imageItems")!=null && localStorage.getItem("imageItems").split(",").length < 4) {
        items = localStorage.getItem("imageItems").split(",");
        items.push($("#image")[0].src.split("/")[5]);
      } else {
        items.push($("#image")[0].src.split("/")[5]);
      }
      console.log(($("#image")[0].src.split("/")));
      localStorage.setItem("imageItems",items);

      //Add ingredients from meal into ingredients page - with pain
      if(localStorage.getItem("ingredients") != null && localStorage.getItem("ingredients") != undefined) {
        var ingredientsList = localStorage.getItem("ingredients").split(",");
        for(var i=0;i<mealChanger[mealChosen]["ingredients"].length;i++) {
          ingredientsList.push('<li>' + mealChanger[mealChosen]["ingredients"][i] + '-<p id="amount">1</p><img class="editButton" src="images/edit.png"></li>');
        }
        localStorage.setItem("ingredients",ingredientsList);
      } else {
        var ingredientsList = [];
        for(var i=0;i<mealChanger[mealChosen]["ingredients"].length;i++) {
          ingredientsList.push('<li>' + mealChanger[mealChosen]["ingredients"][i] + '-<p id="amount">1</p><img class="editButton" src="images/edit.png"></li>');
        }
        localStorage.setItem("ingredients",ingredientsList);
      }
      
      window.location.href = "timeline.html";
    });

    //Changes button from add button to remove button
    if(localStorage.getItem("timelineclick") == 'true') {
      //console.log( document.getElementsByClassName("addmealbutton"));
      document.getElementsByClassName("addMeal")[0].outerHTML = '<button class="removeMeal">Remove Meal</button>';
    }
    $(".removeMeal").click(function(event) {
      var list = localStorage.getItem("imageItems").split(",");
      var newList = [];
      
      for(var i=0;i<list.length;i++) {
        if(list[i] != localStorage.getItem("chosenImage")+".png") {
          newList[i] = list[i];
        }  
      }
      localStorage.setItem("imageItems",newList);
      window.location.href = "timeline.html";
    });

});