
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

var blue = new Audio("sounds/blue.mp3");

var buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        switch(e.target.id)
        {
            case 'blue':
                var
        }
    });
});


