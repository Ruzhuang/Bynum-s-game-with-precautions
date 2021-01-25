/*const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [1, 2, 3],
  [4, 5, 6],
  [5, 6, 7],
  [8, 9, 10],
  [9, 10, 11],
  [12, 13, 14],
  [13, 14, 15],
  [0, 4, 8],
  [4, 8, 12],
  [1, 5, 9],
  [5, 9, 13],
  [2, 6, 10],
  [6, 10, 14],
  [3, 7, 11],
  [7, 11, 15],
  [1, 6, 11],
  [0, 5, 10],
  [5, 10, 15],
  [4, 9, 14],
  [2, 5, 8],
  [3, 6, 9],
  [6, 9, 12],
  [7, 10, 13]
]
*/
const ATE = "ate"
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
/*let circleTurn*/
let rightTurn
var width = 8

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  rightTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(ATE)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  document.getElementById("turn").innerHTML = "LEFT's turn"
  winningMessageElement.classList.remove('show')
}

function getCellIndex(elm){
  var i=0
  for(; i<cellElements.length;i++){
    if (cellElements[i]==elm){
      return i
    }
  }
}
/*
function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}
*/
function handleClick(e){
 const cell = e.target
 var i = getCellIndex(cell)
 /* change color and remove click listener on column or row*/
 if (rightTurn==true){
   removeRow(i)
 }
 else{
   removeCol(i)
 }
 removeSingle()
 if (checkWin()){
   endGame()
 }
 else{
   swapTurns()
 }
}
function removeSingle(){
  var i = 0
  for(;i<cellElements.length;i++){
    if(((((i)%8)+8)%8==0 || cellElements[i-1].classList.contains(ATE))&&((((i)%8)+8)%8==7 || cellElements[i+1].classList.contains(ATE))){
      console.log(i)
      cellElements[i].classList.add(ATE)
    }
    if((i-8<0 || cellElements[i-8].classList.contains(ATE))&&(i+8>cellElements.length-1 || cellElements[i+8].classList.contains(ATE))){
      cellElements[i].classList.add(ATE)
    }
  }
}
function endGame() {
  winningMessageTextElement.innerText = `${rightTurn ? "RIGHT" : "LEFT"} Wins!`
  winningMessageElement.classList.add('show')
}

function removeCol(i){
  var temp = i
  while(temp<cellElements.length){
    if(cellElements[temp].classList.contains(ATE)){
      break
    }
    cellElements[temp].classList.add(ATE)
    cellElements[temp].removeEventListener('click', handleClick)
    temp = temp+8
  }
  temp = i - 8
  while(temp > -1){
    if(cellElements[temp].classList.contains(ATE)){
      break
    }
    cellElements[temp].classList.add(ATE)
    cellElements[temp].removeEventListener('click', handleClick)
    temp = temp - 8
  }
}

function removeRow(i){
  var temp = i
  if(temp%8==0){
    cellElements[temp].classList.add(ATE)
    cellElements[temp].removeEventListener('click', handleClick)
    temp=temp+1
  }
  while(temp%8!=0){
    if(cellElements[temp].classList.contains(ATE)){
      break
    }
    cellElements[temp].classList.add(ATE)
    cellElements[temp].removeEventListener('click', handleClick)
    temp = temp+1
  }
  if(i%8==0){
    return
  }
  temp = i - 1
  while(((temp%8)+8)%8!=7){
    console.log(temp)
    if(cellElements[temp].classList.contains(ATE)){
      break
    }
    cellElements[temp].classList.add(ATE)
    cellElements[temp].removeEventListener('click', handleClick)
    temp = temp-1
  }
}
/*
function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}*/

/*function placeMark(cell) {
  cell.classList.add(ATE)
}*/

function swapTurns() {
  rightTurn = !rightTurn
  if (rightTurn) {
    document.getElementById("turn").innerHTML = "RIGHT's turn"
  }
  else{
    document.getElementById("turn").innerHTML = "LEFT's turn"
  }
}
/*
function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}
*/
/*
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
*/
function checkWin(){
  var i = 0
  for(; i<cellElements.length;i++){
    if(!cellElements[i].classList.contains(ATE)){
      console.log("here")
      return false
    }
  }
  return true 
}