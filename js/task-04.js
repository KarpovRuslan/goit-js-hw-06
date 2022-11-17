const valueDecrement = document.querySelector(`button[data-action="decrement"]`);
const valueIncrement = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
}
const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
}

valueDecrement.addEventListener('click', decrement);
valueIncrement.addEventListener('click', increment);
