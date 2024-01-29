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

function createBoxes(amount) {
    destroyBoxes();

    let width = 30;
    let height = 30;
    const margin = 16;

    for (let i = 1; i <= amount; i += 1) {
        const color = getRandomHexColor(); 
        boxesField.insertAdjacentHTML("beforeend",
    `<div class = "box"
      style = "width: ${width}px; height: ${height}px; margin-right: ${margin}px; background-color: ${color};">
    </div>`);
        width += 10;
        height += 10;
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
