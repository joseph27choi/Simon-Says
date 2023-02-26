
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

$('#'+ randomChosenColor).fadeOut(100).fadeIn(100);

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387”);

const buttons = document.querySelectorAll("button");


