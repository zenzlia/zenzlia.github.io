$(document).ready(function() {
    $('body').removeClass("home");
    var fullList = [];
    var variableList = [];

    var tempItemList = document.getElementsByClassName("itemName");
    
    for(var i=0;i<tempItemList.length;i++) {
        fullList.push(tempItemList[i].innerHTML.toUpperCase());
        variableList.push(tempItemList[i]);
    }

    $("#searchBar").keyup(function() {
        var input, filter;

        input = document.getElementById('searchBar');
        filter = input.value.toUpperCase();

        $(document.getElementsByClassName('categoryBox')).css("display","none");
         // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < fullList.length; i++) {
            if (fullList[i].search(filter) !=-1) {
                $(variableList[i]).parent().css("display","");
            } else {
                $(variableList[i]).parent().css("display","none");
            }
        } 
        if(filter == "") {
            $(document.getElementsByClassName('categoryBox')).css("display","");
        }
   
    });

    $(".addIngredientButton").click(function(event) {  
        $("#popup").toggleClass('animation');
        var list = [];
        var oldList,done;
        done = false;
        var itemName = $(event.target).siblings()[0].innerHTML;
        if(localStorage.getItem("ingredients") != null) {
            oldList = localStorage.getItem("ingredients").split(",");
            for(var i=0;i<oldList.length;i++) {
                if(oldList[i].slice(4,oldList[i].length-72,) == itemName && done ==false) {
                    var amount = parseInt(oldList[i][oldList[i].length-56]);
                    list.push('<li>' + itemName + '-<p id="amount">' + (amount+1) +'</p><img class="editButton" src="images/edit.png"></li>');
                    done = true;
                } else {
                    list.push(oldList[i]);
                }
            } 
            if(done==false) {
                list.push('<li>' + itemName + '-<p id="amount">1</p><img class="editButton" src="images/edit.png"></li>');
            }
        } else {
            list.push('<li>' + itemName + '-<p id="amount">1</p><img class="editButton" src="images/edit.png"></li>');
        }
        localStorage.setItem("ingredients",list);
    });
    
    $(".customButton").click(function(event) {  
        $("#popup").toggleClass('animation');
        var ingredientsList = localStorage.getItem("ingredients").split(",");
        var input = document.getElementById('searchBar').value;
        if(input!="") {
            ingredientsList.push('<li>' + input + '-<p id="amount">1</p><img class="editButton" src="images/edit.png"></li>');
            localStorage.setItem("ingredients",ingredientsList);
        }
        
    });
});