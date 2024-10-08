const findNumber = document.getElementById("findNumber")
const result = document.getElementById("result")
const TotalChance = document.getElementById("MyScore")
const randomNumber = Math.floor(Math.random()*10)+1
let score = 10
//console.log(randomNumber)

function MyGame(){
   const enteredNumber = findNumber.value
   if(randomNumber ==enteredNumber){
    //console.log("Right")
    result.textContent = "Your Correct........!"
   }else{
    score =score-1
    TotalChance.textContent = "score:"+ score

    result.textContent = "Your Wrong :) Try Hard..."
   }
}