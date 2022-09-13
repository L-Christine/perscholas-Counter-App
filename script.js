//====1. Create a new variable called 'total' and assign it the div with the id of 'total'

const total = document.getElementById('total')
let totalNum = Number(total.textContent) //<-this applies to all function, so instead of including in every function, better to put it on the top, use let, not const b/c it will change

//====2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)

function add() {
    totalNum += 1 //main fx = add 1 for every click
    // let totalNum = Number(total.textContent) MOVED TO THE TOP
    total.textContent = totalNum //what is totalNum -> 0 in HTML
    window.alert(totalNum) //every click, alert pops up with totalNum
    console.log(totalNum); //print the totalNum on the page
  }

function subtract() {
    totalNum -= 1
    total.textContent = totalNum
    window.alert(totalNum)
    console.log(totalNum);
}
  
function multiplyBy2() {
    totalNum *= 2
    total.textContent = totalNum
    window.alert(totalNum)
    console.log(totalNum);
}

function divideBy2() {
    totalNum /= 2
    total.textContent = totalNum
    window.alert(totalNum)
    console.log(totalNum);
}

function multiplyBy5() {
    totalNum *= 5
    total.textContent = totalNum
    window.alert(totalNum)
    console.log(totalNum);
}  

function divideBy5() {
    totalNum /= 5
    total.textContent = totalNum
    window.alert(totalNum)
    console.log(totalNum);
}

//====3. Attach Functions to Buttons

const addOne = document.getElementById("add") //grab a button with id='add' from HTML
addOne.addEventListener('click',add) //<- add event action, function

const subOne = document.getElementById("subtract")
subOne.addEventListener('click',subtract)

const multTwo = document.getElementById("mult-2")
multTwo.addEventListener('click',multiplyBy2)

const divTwo = document.getElementById("div-2")
divTwo.addEventListener('click',divideBy2)

const multFive = document.getElementById("mult-5")
multTwo.addEventListener('click',multiplyBy5)

const divFive = document.getElementById("div-5")
divFive.addEventListener('click',divideBy5)