const inputElement = document.querySelector('#validation-input');

function onInputChangeBordercolor(event) {
    let inputText = event.currentTarget.value;

    if (inputText.length === Number(inputElement.dataset.length)) {
        inputElement.classList.remove('invalid')
        return inputElement.classList.add('valid')
    }
    return inputElement.classList.add('invalid')
};

inputElement.addEventListener('blur', onInputChangeBordercolor);