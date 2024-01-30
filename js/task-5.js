'use strict';

const button = document.querySelector('button.change-color');
const span = document.querySelector('span.color');
const body = document.querySelector('body');

function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, 0)}`
}
    
function changeColor() {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
}

button.addEventListener("click", changeColor);
    


   


