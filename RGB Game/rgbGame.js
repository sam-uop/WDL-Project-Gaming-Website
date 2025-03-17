var numSquares = 6;
var colorsList = generateRandomColors(numSquares);
var rightColor = randomPickedColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


colorDisplay.textContent = rightColor;

for (var i = 0; i < squares.length; i++) {
    //adding colors to all the tiles
    squares[i].style.backgroundColor = colorsList[i];
    //adding click listeners to all the tiles
    squares[i].addEventListener("click", function () {
        //check color of click tile and compare with rightColor
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === rightColor) {
            message.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again :(";
        }
    });
}

function changeColors(color) {
    //looping through all tiles and changing the color to rightColor
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function randomPickedColor() {
    //Math.random is used to select things at random
    var randomColor = Math.floor(Math.random() * colorsList.length);
    return colorsList[randomColor];
}

function generateRandomColors(numcolors) {
    //make an array
    var colorArray = [];
    //add numcolors random colors to the array
    for (var i = 0; i < numcolors; i++) {
        //get random color and push to array
        colorArray.push(randomColor());
    }
    //return that array
    return colorArray;
}

function randomColor() {
    //pick red btn 0 to 255
    var red = Math.floor(Math.random() * 256);
    //pick green btn 0 to 255
    var green = Math.floor(Math.random() * 256);
    //pick blue btn 0 to 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

resetButton.addEventListener("click", function () {
    //generate new colors
    colorsList = generateRandomColors(numSquares);
    //pick a new randon color
    rightColor = randomPickedColor();
    //change color display to match the picked color
    colorDisplay.textContent = rightColor;
    this.textContent = "New Colors"
    message.textContent = "";
    //change the colors of the tiles
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colorsList[i];
    }
    h1.style.backgroundColor = "steelblue";
});

//Looping through the Mode Buttons aka Easy & Hard Buttons
for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6
        //figure out how many buttons to show
        //pick new colors
        //pick a new rightcolor
        //update the changes 
        resetModeButton()
    });
}

function resetModeButton(){
    //generate new colors
    colorsList = generateRandomColors(numSquares);
    //pick a new random color
    rightColor = randomPickedColor();
    //change color display to match the picked color
    colorDisplay.textContent = rightColor;
    resetButton.textContent = "New Colors"
    message.textContent = "";
    //change the colors of the tiles
    for (var i = 0; i < squares.length; i++) {
        if (colorsList[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colorsList[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function () {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colorsList = generateRandomColors(numSquares);
//     rightColor = randomPickedColor();
//     colorDisplay.textContent = rightColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colorsList[i]) {
//             squares[i].style.backgroundColor = colorsList[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colorsList = generateRandomColors(numSquares);
//     rightColor = randomPickedColor();
//     colorDisplay.textContent = rightColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colorsList[i];
//         squares[i].style.display = "block";
//     }
// })