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
    const initialSize = 30;
    const increaseSize = 10;

    destroyBoxes();
    for (let i = 1; i <= amount; i += 1) {
        const color = getRandomHexColor(); 
        const size = initialSize + (i - 1) * increaseSize;
        boxesField.insertAdjacentHTML('beforeend',
    `<div class = 'box'
      style = 'width: ${size}px; height: ${size}px; background-color: ${color};'>
    </div>`);
    };
};

buttonCreate.addEventListener('click',() => {
    if (Number(input.value) >= 1 && Number(input.value) <= 100) {
        createBoxes(Number(input.value))
    };
    input.value = '';
});

function destroyBoxes() {
    boxesField.innerHTML = '';
};

buttonDestroy.addEventListener('click', destroyBoxes);