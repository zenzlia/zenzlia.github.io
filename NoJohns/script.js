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
    "I thought I was on the GC and hazards were ON",
    "My MKLEO number is too low",
    "Your character is a +1000 on mine",
    "Game bad",
    "I gave you a homie stock but didn't realise it was the last one",
    "My brain died thinking about Mint2 complaining about Mewtwo's tailhurtbox",
    "I couldn't get the image of Ben Gold kissing ESAM out of my head",
    "Someone texted me",
    "The knockback wasn't set on 1.0",
    "Ken deserves nothing",
    "I played my secondary",
    "My character can't kill",
    "My opponent shit himself (2015)",
    "Seed 1 rigged the bracket",
    "shadrew",
    "gamer boy BO 2 stronk",
    "siqniq decided to try again",
    "TO gave me a 5 Ness run",
    "A viewer stood behind me for 10 minutes",
    "Only lost because I thought it would be funny",
    "I lost because spazzy screamed PWAH",
    "They were from another state",
    "My last opponent DQed and I'm still upset about it",
    "The chair next to me got taken and it distracted me",
    "Someone hit the projector and it scared me!",
    "It's my first day with the character"
];

$(document).ready(function() {
    $("button").mousedown(function() {
        var r = Math.floor(Math.random() * bigJohns.length);
        $("#john")[0].innerHTML = bigJohns[r];
    });
});
