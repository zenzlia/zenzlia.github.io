$(document).ready(function() {
	$('body').addClass("home");
	$("html, body, #wrapper").css({
		height: $(window).height()
	});

	$('#home').unbind("click");

    $(".likeButton").click(function(event) {
			var pressedButton = $(event.target);
			var src = pressedButton.attr('src');
			if(src =="images/filled heart.png") {
				pressedButton.attr('src', 'images/heart empty.png');
			} else {
				pressedButton.attr('src', 'images/filled heart.png');
			}
		});

	$("#home").click(function(event) {
		window.location.href = "index.html";
	});

	$("#shoppingList").click(function(event) {
		window.location.href = "shoppingList.html";
	});

	$("#timeline").click(function(event) {
		window.location.href = "timeline.html";
	});

	$("#title img").click(function(event) {
		window.location.href = "onboardscreen.html";
	});

	$(".exitButton").click(function(event) {
		window.history.back();
	});


	$("#mealSearchBar").keyup(function() {
		var input, filter;

		input = document.getElementById('mealSearchBar');
		filter = input.value.toUpperCase().replace(/\s/g,'');
		if(filter!="") {
			$(document.getElementsByClassName('categoryBox')).css("display","none");
		} else {
			$(document.getElementsByClassName('categoryBox')).css("display","");
		}

		var mealTextList = [];
		var mealList = document.getElementsByTagName("img");
		for(var i=0;i<mealList.length;i++) {
			var item = mealList[i].src.split("/")[5].toUpperCase();
			mealTextList.push(item.substring(0, item.length-3));
		}
		//Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < mealTextList.length; i++) {
			if (mealTextList[i].search(filter)!=-1) {
				$(mealList[i]).css("display","");
			} else {
				$(mealList[i]).css("display","none");
			}
		} 
	});

});

/*
// Store
localStorage.setItem("lastname", "Smith");
localStorage.setItem('storeObj', JSON.stringify(myObj));.
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
var getObject = JSON.parse(localStorage.getItem('storeObj'));
*/