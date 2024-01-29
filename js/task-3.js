'use strict';

const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

textInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue === "") {
    textOutput.textContent = "Anonymous"; 
  } else {
    textOutput.textContent = inputValue;
  }
});

