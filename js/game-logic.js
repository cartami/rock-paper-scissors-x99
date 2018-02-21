// All code should be written in this file.
let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  if(moveOneType !== undefined && moveTwoType !== undefined && moveThreeType !== undefined
    && moveOneValue !== undefined && moveTwoValue !== undefined && moveThreeValue !== undefined) {
    if(player === 'Player One') {
      if(moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') {
        if(moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') {
          if(moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') {
            if(!(moveOneValue < 1) && !(moveOneValue > 99) && !((moveOneValue + moveTwoValue + moveThreeValue) > 99) ) {
              if(!(moveTwoValue < 1) && !(moveTwoValue > 99) && !((moveOneValue + moveTwoValue + moveThreeValue) > 99)) {
                if(!(moveThreeValue < 1) && !(moveThreeValue > 99) && !((moveOneValue + moveTwoValue + moveThreeValue) > 99)) {
                  playerOneMoveOneType = moveOneType;
                  playerOneMoveTwoType = moveTwoType;
                  playerOneMoveThreeType = moveThreeType;
                  playerOneMoveOneValue = moveOneValue;
                  playerOneMoveTwoValue = moveTwoValue;
                  playerOneMoveThreeValue = moveThreeValue;
                }
              }
            }
          }
        }
      }
} //end of player 1
    if(player === 'Player Two') {
      if(moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') {
        if(moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') {
          if(moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') {
            if(!(moveOneValue < 1) && !(moveOneValue > 99) && !((moveOneValue + moveTwoValue + moveThreeValue) > 99)) {
              if(!(moveTwoValue < 1) && !(moveTwoValue > 99) && !((moveOneValue + moveTwoValue + moveThreeValue) > 99))  {
                if(!(moveThreeValue < 1) && !(moveThreeValue > 99) && !((moveOneValue + moveTwoValue + moveThreeValue) > 99)) {
                  playerTwoMoveOneType = moveOneType;
                  playerTwoMoveTwoType = moveTwoType;
                  playerTwoMoveThreeType = moveThreeType;
                  playerTwoMoveOneValue = moveOneValue;
                  playerTwoMoveTwoValue = moveTwoValue;
                  playerTwoMoveThreeValue = moveThreeValue;
                }
              }
            }
          }
        }
      }
    } //end of player 2
  } //end of if
} //end of function setPlayerMoves

function getRoundWinner(roundNumber) {
  switch(roundNumber) { //start of switch
    case 1: {
      if(playerOneMoveOneType === playerTwoMoveOneType) {
        if(playerOneMoveOneValue === playerTwoMoveOneValue) {
          return 'Tie';
        } else if(playerOneMoveOneValue > playerTwoMoveOneValue) {
          return 'Player One';
        } else if(playerOneMoveOneValue < playerTwoMoveOneValue) {
          return 'Player Two';
        } else {
          return null;
        } //if any moveValues are missing
      } else if(playerOneMoveOneType === undefined || playerTwoMoveOneType === undefined){
        return null; //if any move types are missing
      } else if(playerOneMoveOneType === 'rock') {
        if(playerTwoMoveOneType === 'scissors') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if(playerOneMoveOneType === 'paper') {
        if(playerTwoMoveOneType === 'rock') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if(playerOneMoveOneType === 'scissors') {
        if(playerTwoMoveOneType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      }
    } //end of case 1

    case 2: {
      if(playerOneMoveTwoType === playerTwoMoveTwoType) {
        if(playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          return 'Tie';
        } else if(playerOneMoveTwoValue > playerTwoMoveTwoValue) {
          return 'Player One';
        } else if(playerOneMoveTwoValue < playerTwoMoveTwoValue) {
          return 'Player Two';
        } else {
          return null;
        } //if any moveValues are missing
      } else if(playerOneMoveOneType === undefined || playerTwoMoveOneType === undefined){
        return null; //if any move types are missing
      } else if(playerOneMoveTwoType === 'rock') {
        if(playerTwoMoveTwoType === 'scissors') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if(playerOneMoveTwoType === 'paper') {
        if(playerTwoMoveTwoType === 'rock') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if(playerOneMoveTwoType === 'scissors') {
        if(playerTwoMoveTwoType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if(playerOneMoveTwoType === undefined || playerTwoMoveTwoType === undefined){
        return null;
      } //if any move types are missing
    } //end of case 2
    case 3: {
      if(playerOneMoveThreeType === playerTwoMoveThreeType) {
        if(playerOneMoveThreeValue === playerTwoMoveThreeValue) {
          return 'Tie';
        } else if(playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          return 'Player One';
        } else if(playerOneMoveThreeValue < playerTwoMoveThreeValue) {
          return 'Player Two';
        } else {
          return null;
        } //if any moveValues are missing
      } else if(playerOneMoveOneType === undefined || playerTwoMoveOneType === undefined){
        return null; //if any move types are missing
      } else if(playerOneMoveThreeType === 'rock') {
        if(playerTwoMoveThreeType === 'scissors') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if(playerOneMoveThreeType === 'paper') {
        if(playerTwoMoveThreeType === 'rock') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if(playerOneMoveThreeType === 'scissors') {
        if(playerTwoMoveThreeType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if(playerOneMoveThreeType === undefined || playerTwoMoveThreeType === undefined) {
        return null;
      } //if any move types are missing
    } //end of case 3
    default: {
      return null;
    }
  } //end of switch
} //end of getRoundWinner

function getGameWinner() {
  let playerOneCount = 0;
  let playerTwoCount = 0;
  let roundNumber = 1;
  let nullFlag;
  while(roundNumber < 4) {
    switch(getRoundWinner(roundNumber)) {
      case 'Player One': {
        playerOneCount++;
        break;
      }
      case 'Player Two': {
        playerTwoCount++;
        break;
      }
      case 'Tie': {
        playerOneCount++;
        playerTwoCount++;
        break;
      }
      default:
      nullFlag = null;
      break;
    } //end of switch
   roundNumber++;
 } //end of while
 if(nullFlag === null){
   return null;
 } else if(playerOneCount === playerTwoCount) {
   return 'Tie';
 } else if(playerOneCount > playerTwoCount){
   return 'Player One';
 } else if(playerOneCount < playerTwoCount){
   return 'Player Two';
 } //end of ifs
} //end of getGameWinner

function setComputerMoves() {
    let sum = 99;
    let moveType = Math.floor(Math.random() * 3) + 1;
    let moveOneValue = Math.floor(Math.random() * sum) + 1;
    let moveTwoValue;
    let moveThreeValue;
    if(moveOneValue === 99) {
      moveOneValue = 97;
      moveTwoValue = 1;
      moveThreeValue = 1;
    }
    sum -= moveOneValue;

    switch(moveType) {
      case 1: {
        moveOneType = 'rock';
        break;
      }
      case 2: {
        moveOneType = 'paper';
        break;
      }
      case 3: {
        moveOneType = 'scissors';
        break;
      }
    } //end of switch

    moveType = Math.floor(Math.random() * 3) + 1;
    if(sum === 0 && moveTwoValue !== true) {
      moveTwoValue = 0;
    } else if(moveTwoValue !== true){
      moveTwoValue = Math.floor(Math.random() * sum) + 1;
      sum -= moveTwoValue;
    }

    switch(moveType) {
      case 1: {
        moveTwoType = 'rock';
        break;
      }
      case 2: {
        moveTwoType = 'paper';
        break;
      }
      case 3: {
        moveTwoType = 'scissors';
        break;
      }
    } //end of switch

    moveType = Math.floor(Math.random() * 3) + 1;

    if(sum === 0 && moveThreeValue !== true) {
      moveThreeValue = 0;
    } else if(moveThreeValue !== true) {
      moveThreeValue = Math.floor(Math.random() * sum) + 1;
      sum -= moveThreeValue;
      if(sum > 0) {
        moveThreeValue += sum; //checks for leftover
      }
    }

    switch(moveType) {
      case 1: {
        moveThreeType = 'rock';
        break;
      }
      case 2: {
        moveThreeType = 'paper';
        break;
      }
      case 3: {
        moveThreeType = 'scissors';
        break;
      }
    } //end of switch
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
} //end of setComputerMoves
