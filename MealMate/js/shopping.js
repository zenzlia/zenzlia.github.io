$(document).ready(function() {
    $('body').removeClass("home");
    $('body').addClass("shopping");

    if(localStorage.getItem("ingredients") != null ) {
            var ingredientsList = localStorage.getItem("ingredients").split(',');
        for(var i=0;i<ingredientsList.length;i++) {
            $("#list").append(ingredientsList[i]);
        }
    }

    $(document).on('click','.editButton',function(event){
        var pressedButton = $(event.target);
        pressedButton.replaceWith('<img id="plusButton" src="images/plusButton.png"><img id="crossButton" src="images/crossButton.png">');  
    });

    $(document).on('click','#plusButton',function(event){
        var pressedButton = $(event.target);
        var amountHTML = pressedButton.siblings()[0];
        var amount = pressedButton.siblings()[0]['innerHTML'];
        amountHTML.innerHTML = parseInt(amount) + 1;
    });

    $(document).on('click','#crossButton',function(event){
        var pressedButton = $(event.target);
        var amountHTML = pressedButton.siblings()[0];
        var amount = pressedButton.siblings()[0]['innerHTML'];
        if(amount-1 == 0) {
            pressedButton.parent().remove();
        } else {
            amountHTML.innerHTML = parseInt(amount) - 1;
        }
    });

    $("#title img").click(function(event) {
        saveList();
		window.location.href = "onboardscreen.html";
    });
    
    $("#home").click(function(event) {
        saveList();
		window.location.href = "index.html";
	});

    
	$(".shoppingListButton").click(function(event) {
        saveList();
		window.location.href = "ingredients.html";
	});

    $('h1').click(function(){
        $('#list li img').remove();
        $('#list li').append('<img class="editButton" src="images/edit.png">');
    });

    function saveList() {
        var list = [];
        var childrenList = $("#list").children();
        console.log(childrenList);

        for(var i=0;i<childrenList.length;i++) {
            list.push(childrenList[i].outerHTML.toString());
        }
        localStorage.setItem("ingredients",list);
    }

});