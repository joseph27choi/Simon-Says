//Global Variable Initialization
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0; 


// detecting keypress
$(document).keypress(function()
{
    // when key detected, game starts
    if (level === 0)
    {
        nextSequence();
    }

    //changing header to level 0
    $('h1').text('Level ' + level);
});


// activating game
//
function nextSequence()
{
    // reset the userClickedPattern array to empty
    userClickedPattern =

    // assign random number and push it to gamePattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    // flash animation to randomly selected button
    $('#'+ randomChosenColor).fadeOut(100).fadeIn(100);
    
    // buttons contains a list with all button objects
    var buttons = document.querySelectorAll(".btn");

    // listens for any button clicks
    //
    buttons.forEach(button => {
        button.addEventListener('click', function(e){
            // * clicking e triggered this event *

            // userChosenColor stores the color of the clicked button
            var userChosenColor = e.target.id;

            // append it to list tracking color clicked
            userClickedPattern.push(userChosenColor);

            // play corresponding sound every time button clicked
            playSound(userChosenColor);
            
            // animate the button every time button clicked
            animatePress(userChosenColor);

            // check if user's chosen button is correct
            checkAnswer(userClickedPattern.length - 1);
        });
    });

    // update level after each sequence
    level++;

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


function checkAnswer(currentLevel)
{
    console.log(currentLevel);
    console.log(gamePattern[currentLevel]);
    console.log(userClickedPattern[currentLevel]);
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
        console.log('success');
        //next level
        if (currentLevel === gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else 
    {
        console.log('wrong');
        //end game
    }


}

