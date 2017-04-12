var NumOfSquares = 24;
var MaxNumber = new Array(76);
var numsUsed = [];
var numberCalled;
var numbersCalled = [];
var column;
var row;

var cardNumbers = [
    [0,0], [0,1], [0,2], [0,3], [0,4],
    [1,0], [1,1], [1,2], [1,3], [1,4],
    [2,0], [2,1], [2,2], [2,3], [2,4],
    [3,0], [3,1], [3,2], [3,3], [3,4],
    [4,0], [4,1], [4,2], [4,3], [4,4]
    ];

var winningCard = [
    [0,0], [0,1], [0,2], [0,3], [0,4],
    [1,0], [1,1], [1,2], [1,3], [1,4],
    [2,0], [2,1], [2,2], [2,3], [2,4],
    [3,0], [3,1], [3,2], [3,3], [3,4],
    [4,0], [4,1], [4,2], [4,3], [4,4]
    ];

function createCard() {
    var max;
    var min;
    var x;
    var y;
    var z;
    for (var i = 0; i < 5; i++) {
        for(var j=0; j<5; j++) {
            max = 15 + (i*15);
            min = 1 + (i*15);
            cardNumbers[i][j] = Math.floor((Math.random() * (max - min) + min));
            winningCard[i][j] = false;
            if (i == 0) {
                x = 'B';
            } else if (i == 1) {
                x = 'I';
            } else if (i == 2) {
                x = 'N';
            } else if (i == 3) {
                x = 'G';
            } else if (i == 4) {
                x = 'O';
            } 
        z = j + 1;
        y = x.concat(z.toString());
        document.getElementById(y).innerHTML = cardNumbers[i][j];
        if (i == 2 && j == 2)
            document.getElementById(y).innerHTML = "FREE";
        }
    }
}

function check(currentNum) {
    var getCurrentLetter = currentNum.slice(0,1);
    if (getCurrentLetter == 'B') {
        column = 0;
    } else if (getCurrentLetter == 'I') {
        column = 1;

    } else if (getCurrentLetter == 'N') {
        column = 2;
        
    } else if (getCurrentLetter == 'G') {
        column = 3;
        
    } else if (getCurrentLetter == 'O') {
        column = 4;
    }
    row = parseInt(currentNum.slice(1,2) - 1);

    if (cardNumbers[column][row] == numberCalled) {
        document.getElementById(currentNum).style.backgroundColor = "#FF6666";
        winningCard[column][row] = true;
    }
    else if (column == 2 && row == 2){
        document.getElementById('N3').style.backgroundColor = "#FF6666";
        winningCard[2][2] = true;
    }
}

function checkWin(){
   var winningCondition = document.getElementById('goals').value;
   console.log(winningCondition);
   if (winningCondition == "All 4 Corners") {
    if (winningCard[0][0] && winningCard[0][4] && winningCard[4][0] && winningCard[4][4]){
        alert("You Won with 4 Corners");
    } else{
        alert("No Bingo! Keep Going!");
    }
   }if (winningCondition == "Any Horizontal Line"){
        if (winningCard[0][0] && winningCard[0][1] && winningCard[0][2] && winningCard[0][3] && winningCard[0][4])
            alert("You Won with Horizontal Line");
        else if (winningCard[1][0] && winningCard[1][1] && winningCard[1][2] && winningCard[1][3] && winningCard[1][4])
            alert("You Won with Horizontal Line");
        else if (winningCard[2][0] && winningCard[2][1] && winningCard[2][2] && winningCard[2][3] && winningCard[2][4])
            alert("You Won with Horizontal Line");
        else if (winningCard[3][0] && winningCard[3][1] && winningCard[3][2] && winningCard[3][3] && winningCard[3][4])
            alert("You Won with Horizontal Line");
        else if (winningCard[4][0] && winningCard[4][1] && winningCard[4][2] && winningCard[4][3] && winningCard[4][4])
            alert("You Won with Horizontal Line");
        else{
            alert("No Bingo! Keep Going!");
        }
}   if (winningCondition == "Any Vertical Line"){
        if (winningCard[0][0] && winningCard[1][0] && winningCard[2][0] && winningCard[3][0] && winningCard[4][0])
            alert("You Won with Vertical Line");
        else if (winningCard[0][1] && winningCard[1][1] && winningCard[2][1] && winningCard[3][1] && winningCard[4][1])
            alert("You Won with Vertical Line");
        else if (winningCard[0][2] && winningCard[1][2] && winningCard[2][2] && winningCard[3][2] && winningCard[4][2])
            alert("You Won with Vertical Line");
        else if (winningCard[0][3] && winningCard[1][3] && winningCard[2][3] && winningCard[3][3] && winningCard[4][3])
            alert("You Won with Vertical Line");
        else if (winningCard[0][4] && winningCard[1][4] && winningCard[2][4] && winningCard[3][4] && winningCard[4][4])
            alert("You Won with Vertical Line");
        else{
            alert("No Bingo! Keep Going!");
        }
    
   }if (winningCondition == "Any Diagonal Line"){
        if (winningCard[0][0] && winningCard[1][1] && winningCard[2][2] && winningCard[3][3] && winningCard[4][4])
            alert("You Won with Diagonal Line");
        else if (winningCard[4][0] && winningCard[3][1] && winningCard[2][2] && winningCard[2][3] && winningCard[0][4])
            alert("You Won with Diagonal Line");

        else{
            alert("No Bingo! Keep Going!");
        }
    
   }if (winningCondition == "Full Card"){
        if (winningCard[0][0] && winningCard[1][0] && winningCard[2][0] && winningCard[3][0] && winningCard[4][0] && winningCard[0][1] 
            && winningCard[1][1] && winningCard[2][1] && winningCard[3][1] && winningCard[4][1] && inningCard[0][3] && winningCard[1][3] 
            && winningCard[2][3] && winningCard[3][3] && winningCard[4][3] && winningCard[0][4] && winningCard[1][4] && winningCard[2][4]
            && winningCard[3][4] && winningCard[4][4]){
            alert("You Won with Full Card");
        }
        else {
            alert("No Bingo! Keep Going!");
        }

   }
}

function generateNumber() {
        numberCalled = Math.floor(Math.random() * 75);
        document.getElementById("num").innerHTML = numberCalled;
}