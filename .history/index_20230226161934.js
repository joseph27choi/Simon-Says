import { playSound, animatePress } from 'button.js';

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
        //changing header to level 0
        $('h1').text('Level ' + level);
        //activating next randomized color select
        nextSequence();
    }

});


// activating game
//
function nextSequence()
{
    // reset the userClickedPattern array to empty
    userClickedPattern = [];

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
    $('h1').text('Level ' + level);
    level++;

}


function checkAnswer(currentLevel)
{

    var numClicks = userClickedPattern.length - 1;
    console.log(numClicks);

    console.log(userClickedPattern);
    console.log(gamePattern);
    
    //console.log(userClickedPattern[numClicks] === gamePattern[numClicks]);

    if (userClickedPattern[numClicks] === gamePattern[numClicks])
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

