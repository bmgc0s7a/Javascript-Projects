"use strict";

let numberRandom = Math.trunc(Math.random() * 50) + 1;
let attemps = 20;
let hightScore = 0;

const notes = document.querySelector('.helpnote');
const attempsValue = document.querySelector('.attemps');
const buttonTry = document.querySelector('.try');
const numberUser = document.querySelector('.number');

// Function change the textcontent
const changeContent = function(element, value){
    document.querySelector(element).textContent = value;
}

// Action click button AGAIN?
document.querySelector('.again').addEventListener('click', function(){
    attemps = 20;
    numberRandom = Math.trunc(Math.random() * 50) + 1;
    document.querySelector('body').style.backgroundColor = "";
    numberUser.disabled = false;
    buttonTry.hidden = false;
    notes.textContent = ""; 
    attempsValue.style.color = "";
    changeContent('.attemps',String(attemps));  
})

// CLICK BUTTON TRY
buttonTry.addEventListener("click", function(){
    const valueInput = Number(numberUser.value);
    if(!valueInput) return;
    if(valueInput === numberRandom){
        document.querySelector('body').style.backgroundColor = "green";
        numberUser.disabled = true;
        changeContent('.helpnote',"Congratulations, You Win");  
        changeContent('.hiddenNumber',numberRandom);  
        buttonTry.hidden = true;
        if(hightScore < attemps){ 
            hightScore = attemps;
            changeContent('.score',hightScore);
        }
    } else {
        changeContent('.helpnote', (valueInput < numberRandom) ? "To low" : "To High");
        attemps--;
        changeContent('.attemps', String(attemps));
        if(attemps > 0){  
            attempsValue.style.color = (attemps <= 10) ? (attemps <= 5) ? "red" : "orange" : "";
        } else {
            buttonTry.hidden = true;
            numberUser.disabled = true;
        }
    }
});