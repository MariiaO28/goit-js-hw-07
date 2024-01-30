'use strict';

const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesField = document.querySelector('div#boxes');

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

let size = 30;
const increaseSize = 10;
const margin = 16;

function createBoxes(amount) {
    destroyBoxes();
    for (let i = 1; i <= amount; i += 1) {
        const color = getRandomHexColor(); 
        boxesField.insertAdjacentHTML("beforeend",
    `<div class = "box"
      style = "width: ${size}px; height: ${size}px; margin-right: ${margin}px; background-color: ${color};">
    </div>`);
        size += increaseSize;
    };
};

buttonCreate.addEventListener('click',() => {
    if (Number(input.value) >= 1 && Number(input.value) <= 100) {
        createBoxes(Number(input.value))
    };
    input.value = "";
});

function destroyBoxes() {
    boxesField.innerHTML = "";
};

buttonDestroy.addEventListener('click', destroyBoxes);
