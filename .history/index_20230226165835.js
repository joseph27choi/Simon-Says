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
        //changing header to level 1
        $('h1').text('Level ' + level);
        //activating next randomized color select
        nextSequence();
    }
    
});


// listens for any button clicks
//
$('.btn').click(function(e) {

    // userChosenColor stores the color of the clicked button
    var userChosenColor = e.target.id;

    // append it to list tracking color clicked
    userClickedPattern.push(userChosenColor);

    // play corresponding sound every time button clicked
    playSound(userChosenColor);
    
    // animate the button every time button clicked
    animatePress(userChosenColor);

    // check if user's chosen button is correct
    if (userClickedPattern.length > 0)
    {
        checkAnswer(userClickedPattern.length - 1);
    }

});



function checkAnswer(clickIndex)
{
    console.log('user has chosen button');

    // called every time user presses a button
    console.log(clickIndex);
    console.log(userClickedPattern);

    // checking if elements are the same for each
    if (userClickedPattern[clickIndex] === gamePattern[clickIndex])
    {
        console.log('success');
        
        // checking if sequence is finished
        if (clickIndex === gamePattern.length - 1)
        {
            console.log('passed level');

            // update level after each sequence
            $('h1').text('Level ' + level);
            level++;

            // call next sequence after delay
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

    }
    else
    {
        console.log('wrong');
    }
}


// activating game
//
function nextSequence()
{
    // reset the userClickedPattern array to empty
    console.log('clicked pattern has been reset');
    userClickedPattern = [];

    // assign random number and push it to gamePattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // flash animation to randomly selected button
    $('#'+ randomChosenColor).fadeOut(100).fadeIn(100);

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
