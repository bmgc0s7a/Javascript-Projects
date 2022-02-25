"use strict";

const numberRandom = Math.trunc(Math.random() * 50) + 1;
let attemps = 20;
let hightScore = 0;

const notes = document.querySelector('.helpnote');
const attempsValue = document.querySelector('.attemps');
const buttonTry = document.querySelector('.try');
const numberUser = document.querySelector('.number');

buttonTry.addEventListener("click", function(){
    const valueInput = Number(numberUser.value);
    if(!valueInput) return;
    console.log(valueInput, numberRandom);
    if(valueInput === numberRandom){
        document.querySelector('body').style.backgroundColor = "green";
        numberUser.disabled = true;
        notes.textContent = "Congratulations, You Win";  
        document.querySelector('.hiddenNumber').textContent = numberRandom;
        buttonTry.hidden = true;
        buttonTry.hidden = true;
        if(hightScore < attemps){ 
            hightScore = attemps;
            document.querySelector('.score').textContent = hightScore;
        }
    } else {
        if(valueInput < numberRandom){
            notes.textContent = "To low";          
        } else {
            notes.textContent = "To high";          
        }
        if(attemps > 0){
            if(attemps < 10){
                attempsValue.style.color = "orange";
                if(attemps < 5)
                attempsValue.style.color = "red";
            }
            console.log(attemps);
            attemps--;
            attempsValue.textContent = String(attemps);
        } else {
            buttonTry.hidden = true;
            numberUser.disabled = true;
        }
    }
});