
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $('#'+ randomChosenColor).fadeOut(100).fadeIn(100);
    
    var buttons = document.querySelectorAll(".btn");
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e){
            var userChosenColor = e.target.id;
            userClickedPattern.push(userChosenColor);
    
            switch(userChosenColor)
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
    
            console.log(userClickedPattern);
        });
    });
}



