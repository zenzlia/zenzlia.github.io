var bigJohns = [
    "My controller misinput",
    "My opponent was campy",
    "I had training before the tourney",
    "I had sexy Ari playing in my head",
    "It's just a bad matchup for my character",
    "I got the wrong counterpick",
    "I left the oven on at home",
    "I didn't want to win so I could attend the Arcadian",
    "I forgot my gloves so my hand slipped",
    "I thought I was playing Smash 4 and ran into you",
    "This isn't my controller",
    "I can't RAR",
    "Forward Aerial",
    "I can't stop thinking about how Sam Gregg got down thrown wolf flashed at 12%",
    "P9 popped off on an SD and disrupted my train of thought",
    "Epstein didn't kill himself",
    "I couldn't stop thinking about how the GC discord is locked",
    "I thought I was on the GC hazards were ON"
];

$(document).ready(function() {
    $("button").mousedown(function() {
        var r = Math.floor(Math.random() * bigJohns.length);
        $("#john")[0].innerHTML = bigJohns[r]
    });
});
