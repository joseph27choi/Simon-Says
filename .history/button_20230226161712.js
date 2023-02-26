// module contains the 

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