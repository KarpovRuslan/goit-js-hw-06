const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password } } = event.currentTarget; 
    
    if (email.value=== "" || password.value === "" ) {
        return alert('Всі поля повинні бути заповнені!');
    }

    const userFormDetails = {};
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        userFormDetails[name] = value;
    });

    console.log(userFormDetails);

    form.reset();

}