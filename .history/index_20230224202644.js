
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



function nextSequence()
{
    // assign random number and push it to gamePattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    // flash animation to randomly selected button
    $('#'+ randomChosenColor).fadeOut(100).fadeIn(100);
    

    var buttons = document.querySelectorAll(".btn");
    
    // push clicked button to userClickedPattern[] and play corresponding sound
    buttons.forEach(button => {
        button.addEventListener('click', function(e){
            var userChosenColor = e.target.id;
            userClickedPattern.push(userChosenColor);

            playSound(userChosenColor);
            
            console.log(e)

            console.log(userClickedPattern);
            
        });
    });
}

function playSound(name)
{
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

function animatePress(currentColor)
{

}

nextSequence();