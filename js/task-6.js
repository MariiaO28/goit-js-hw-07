'use strict';

// const input = document.querySelector('input');
// const button = document.querySelector('#controls button');
// const boxes = document.querySelector('#boxes');
// const createBtn = button.hasAttribute('create');
// const destroyBtn = button.hasAttribute('destroy');

// // /Треба видалаити колір кнопок у ССС і створити кольори кнопок за топомогою дата-атрибутів в джс створити/ 
const input = document.querySelector('#controls input');
const button = document.querySelector('#controls button');
const boxesField = document.querySelector('#boxes');

let width = 30;
let height = 30;

    
function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};


function createBoxes(amount) {
    let amount = input;
    for (let i = 0; i <= amount; i += 1) {
        const color = getRandomHexColor(); 
        boxesField.insertAdjacentHTML("beforeend",
    `<div class = "box"
      style = "width: ${width}px; height: ${height}px; background-color: ${color};">
    </div>`);
        width += 10;
        height += 10;
    };
    return createBoxes;
};

// function amountValidation() {
//     Number(createBoxes(Number)) <= 100? createBoxes : 
// };

button.addEventListener('click', createBoxes, amountValidation);

function boxesDestroy() {
    
}

button.removeEventListener('click', boxesCreate, boxSizesFormula)