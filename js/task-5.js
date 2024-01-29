'use strict';

const button = document.querySelector('button.change-color');
const colorName = document.querySelector('span.color');
const mainColor = document.querySelector('body');

function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, 0)}`;
};
    
function changeColor() {
    const randomColor = getRandomHexColor();
    mainColor.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
}

button.addEventListener("click", changeColor);
    


   


