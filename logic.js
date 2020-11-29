var cellvalues = ["", "", "", "", "", "", "", "", ""];
var userMark, computerMark;
var itsUserTurn, gameIsActive;

document.querySelectorAll('button').forEach(button => button.addEventListener('click', handleMarkSelection));

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));

document.querySelector('#restart-btn').addEventListener('click', () => {
    location.reload();
    return false;
})

function handleMarkSelection(event) {
    if (event.target.value == "X") {
        userMark = "X";
        computerMark = "O";
        document.getElementById("o-turn").disabled = true;
    } 
    else if(event.target.value == "O"){
        userMark = "O";
        computerMark = "X";
        document.getElementById("x-turn").disabled = true;
    } else {
        return; // skip for any-other button
    }

    gameIsActive = true;
    itsUserTurn = true;
    handlePlayerTurn();     // called-once on mark selection
}

function handleCellClick(event) {
    let cellIndex = event.target.getAttribute('data-cell-index');
    if(cellIsEmpty(cellIndex) && gameIsActive) {
        if (itsUserTurn) {
            cellvalues[cellIndex] = userMark;
            event.target.innerHTML = userMark;
            itsUserTurn = false;
        }
        else {
            cellvalues[cellIndex] = computerMark;
            event.target.innerHTML = computerMark;
            itsUserTurn = true;
        }
        handleResults();
        handlePlayerTurn();
    }
    return;
}

function cellIsEmpty(cellIndex) {
    empty = cellvalues[cellIndex] === ""? true: false;
    return empty;
}

function handlePlayerTurn(){
    if(gameIsActive && itsUserTurn) {
        document.getElementById("status-display").innerHTML = `its ${userMark}'s Turn`;
    } 
    else if(gameIsActive && !itsUserTurn){
        document.getElementById("status-display").innerHTML = `its ${computerMark}'s Turn`;
    }
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResults() {
    let userWon = false;
    let computerWon = false;

    for(let i = 0; i <= 7; i++) {
        let winningCondition = winningConditions[i];

        let a = cellvalues[winningCondition[0]];
        let b = cellvalues[winningCondition[1]];
        let c = cellvalues[winningCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        let itsUserMatch = (a === userMark && b === userMark && c === userMark);
        let itsComputerMatch = (a === computerMark && b === computerMark && c === computerMark);

        if (itsUserMatch) {
            userWon = true;
            break;
        } 
        else if(itsComputerMatch){
            computerWon = true;
            break;
        }
    }

    let modalBtn = document.querySelector('#modal-btn');
    if (userWon) {
        document.getElementById("winning-message").innerHTML = 'Congractulations!! You Won the game!..';
        modalBtn.click();
        gameIsActive = false;
        return;
    } 
    else if(computerWon) {
        document.getElementById("winning-message").innerHTML = 'Sorry! You Lose the game!..';
        modalBtn.click();
        gameIsActive = false;
        return;
    }
    
    let roundDraw = !cellvalues.includes("");
    if (roundDraw) {
        document.getElementById("winning-message").innerHTML = 'its Draw, Try Again.';
        modalBtn.click();
        gameIsActive = false;
        return;
    }
}