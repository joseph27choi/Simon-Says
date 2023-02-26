//Global Variable Initialization
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0; 


// detecting keypress
$(document).keypress(function()
{
    // when key detected, game starts
    nextSequence();

    //changing header to level 0
    
});


// activating game
//
function nextSequence()
{
    // assign random number and push it to gamePattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    // flash animation to randomly selected button
    $('#'+ randomChosenColor).fadeOut(100).fadeIn(100);
    

    // push clicked button to userClickedPattern[] and play corresponding sound
    var buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener('click', function(e){
            var userChosenColor = e.target.id;
            userClickedPattern.push(userChosenColor);

            playSound(userChosenColor);
            
            animatePress(userChosenColor);
            //console.log(userChosenColor);
            
        });
    });

}

// @name - the class name of button clicked --> the color of button
// @output - void, plays corresponding sound
//
function playSound(name)
{
    // plays sound corresponding to color clicked
    switch(name)
    {
        case 'blue':
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case 'green':
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case 'red':
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case 'yellow':
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
    }

    return;
}

// @currentColor - the class name of clicked button --> the color of button
// @output - void, adds .pressed class for 100 milliseconds
//
function animatePress(currentColor)
{
    //take the ids with color name and add class
    var idName = "#" + currentColor;
    $(idName).addClass('pressed');

    //remove after 100ms
    setTimeout(function(){
        $(idName).removeClass('pressed');
    }, 100);
}