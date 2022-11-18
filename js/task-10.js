const refs = {
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  inputNumber: document.querySelector('input'),
  newDivs: document.querySelector('#boxes'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = (refs.inputNumber.value);

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    const reducedDimensions = 30 + i * 10;
    
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${reducedDimensions}px`;
    newDiv.style.height = `${reducedDimensions}px`;

    refs.newDivs.appendChild(newDiv);
  }
}

function destroyBoxes() {
  while (refs.newDivs.firstChild) {
    refs.newDivs.removeChild(refs.newDivs.firstChild);
  }
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);