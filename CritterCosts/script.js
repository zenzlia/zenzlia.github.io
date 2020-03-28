function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

function searchData() {
    // Declare variables
    var input, filter;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    var found = false;
    // Loop through all list items, and hide those who don't match the search query
    if (filter == "") {
        $("#resultName")[0].innerHTML = "Critter Name";
        $("#resultAmount")[0].innerHTML = "Critter Price";
        return;
    } else {
        console.log(filter);
    }
    for (i = 0; i < bugNames.length; i++) {
        if (bugNames[i].toUpperCase().indexOf(filter) > -1) {
            $("#resultName")[0].innerHTML = titleCase(bugNames[i]);
            $("#resultAmount")[0].innerHTML = bugValues[i];
            found = true;
        } 
    }

    for (i = 0; i < fishNames.length; i++) {
        if (fishNames[i].toUpperCase().indexOf(filter) > -1) {
            $("#resultName")[0].innerHTML = titleCase(fishNames[i]);
            $("#resultAmount")[0].innerHTML = fishValues[i];
            found = true;
        } 
    }
    if (!found) {
        $("#resultName")[0].innerHTML = "Critter Name";
        $("#resultAmount")[0].innerHTML = "Critter Price";
    }
  }

$(document).ready(function() {

});

