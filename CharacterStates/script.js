function drawBasic() {

    // Let's visualise the whole of QLD
    var QLD = [];
    QLD.push(['Element', 'Players', { role: 'style' }]);
    for (var i = 0; i < CHARACTER_MOST_PLAYED['QLD'].length; i++) {
        var l = [];
        var char = CHARACTER_MOST_PLAYED['QLD'][i];
        l.push(char);
        l.push(STATE['QLD'][char]);
        l.push(COLOURS[char]);
        QLD.push(l)
    }

    var data = google.visualization.arrayToDataTable(
        QLD
     );



    var options = {
        title: 'Queensland Character Distribution',
        chartArea: {width: '100%'},
        hAxis: {
        title: 'Total Population',
        minValue: 0
        },
        vAxis: {
        title: 'Character'
        },
        legend: { position: "none" }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart'));

    chart.draw(data, options);
}


var current_state;

$(document).ready(function() {
    $("#states li").click(function(event) {    
        var state = $(event.target)[0].innerText;
        current_state = state;
        $("#most_active_players")[0].innerHTML = '';
        $("#most_played")[0].innerHTML = '';
        $("#most_active_players").css("background-color", "white");
        var STATE_DATA = [];
        for (var i = 0; i < CHARACTER_MOST_PLAYED[state].length; i++) {
            var l = [];
            var char = CHARACTER_MOST_PLAYED[state][i];
            STATE_DATA.push(l)
            $("#most_played")[0].innerHTML += "<li id='" + char +  "'><img src=" + ICONS[char] + '>' + char + " " + (parseInt(STATE[state][char]) + 1) + '</li>';
            
            var childrenList = $("#most_played").children();
            var recentChild = childrenList[childrenList.length - 1];
            $(recentChild).css("background-color", COLOURS[char]);
        }
    });

    $("#most_played").click(function(event) { 
        $("#most_active_players")[0].innerHTML = '';
        var elem = $(event.target)[0];
        var character = $(elem).attr('id');
        var players = STATE_CHARACTERS[current_state][character];

        for (var i = 0; i < players.length; i++) {
            $("#most_active_players")[0].innerHTML += '<li>' + players[i]['Player'] + '</li>';
        }
        $("#most_active_players").css("background-color", COLOURS[character]);

    });
});