//Variables
var numOfSquares = 8; 
var colours = [];
var pickedColour;
//selectors
var squares = document.getElementsByClassName("square");
var colourDisplay = document.querySelector("h1 span");
var messageDisplay = document.getElementById("message");
var h1Colour = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
var easyClass = document.getElementsByClassName("square");

init();

function init(){
   modeListeners();
    setupSquares();
    reset();
}

function modeListeners()
{
    //mode buttons event listeners
    for(var i=0;i<modeButton.length;i++)
    {
    modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        modeButton[2].classList.remove("selected"); 
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numOfSquares=3;
            for(var i=0;i<3;i++){
            easyClass[i].classList.add("easy");
        }
        }
        else if(this.textContent === "Medium"){
            numOfSquares=4;
            for(var i=0;i<3;i++){
                easyClass[i].classList.remove("easy");
            }
        }
        else if(this.textContent === "Hard"){
            numOfSquares = 8;
            for(var i=0;i<3;i++){
                easyClass[i].classList.remove("easy");
            }
          // modeButton[2].classList.remove("Button");
            //modeButton[2].classList.add("square-hard");
        }
        reset();
 });
    }
}

function setupSquares()
{
    for(var i=0;i<squares.length;i++)
    {
        //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab colour of clicked colour
        var clickedColour=  this.style.backgroundColor;
        //compare colour with picked colour
        if(clickedColour === pickedColour){

           messageDisplay.textContent = "Correct!";
           resetButton.textContent = "Play Again";
          changeColours(clickedColour);
            h1Colour.style.backgroundColor = clickedColour;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
            resetButton.textContent="New Colours"
        }
    });
    }
}

function reset(){
    colours = generateRandomColours(numOfSquares);
     pickedColour = pickColour();
     colourDisplay.textContent = pickedColour;
     resetButton.textContent = "New Colours";
     messageDisplay.textContent = "";
     
     for(var i=0;i<squares.length ; i++)
     {
         if(colours[i])
         {
             squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
         }
         else{
            squares[i].style.display = "none";
         }
     }
     h1Colour.style.backgroundColor = " rgb(53, 129, 190)";
}

resetButton.addEventListener("click",function(){
     reset();
});

function changeColours(colour){
    for(var i=0; i<colours.length;i++)
    {
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour()
{
   var Random = Math.floor(Math.random() * (colours.length));
   return colours[Random];
}

function generateRandomColours(num){
    var array = [];
    for(var i=0;i<num;i++){
        array.push(randomColours());
    }
    return array;
}

function randomColours(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}