const changeColor = document.querySelector('.change-color');
const colorData = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColor.addEventListener('click', (onButtonClickChangeBodyColor) => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorData.textContent=currentColor;
})