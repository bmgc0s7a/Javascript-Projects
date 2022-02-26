'use strict';

const modalPopUp = document.querySelector('.popup');
const buttonsPopup = document.querySelectorAll('.modelpop-up');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');


const openCloseModel = function(state){
    if(state == 'open'){
        modalPopUp.classList.remove('hidden');
        overlay.classList.remove('hidden');  
    } else if (state == 'close'){
        modalPopUp.classList.add('hidden')
        overlay.classList.add('hidden')
    }      
}


for(let i=0;i<buttonsPopup.length;i++){
    buttonsPopup[i].addEventListener('click',  () => openCloseModel('open'))
}      

closeBtn.addEventListener('click',  () => openCloseModel('close'));
overlay.addEventListener('click', () => openCloseModel('close'));

document.addEventListener('keydown', function(e){
    if(e.key == 'Escape' && !modalPopUp.classList.contains('hidden'))
        openCloseModel('close'); 
})