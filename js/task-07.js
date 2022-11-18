const fontController = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${fontController.value}px`;

function onSelectionChange() {
    text.style.fontSize = `${fontController.value}px`;
} 

fontController.addEventListener('input',onSelectionChange)
