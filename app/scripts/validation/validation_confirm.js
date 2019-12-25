let confPass = document.querySelector('.confirmPass');

function checkConfCondition(condition){
    return (condition) ? confPass.style.borderColor = 'red' : confPass.style.borderColor = 'green';
}

function confirmPassValidity() {
    return checkConfCondition(pass.value !== confPass.value);
}

confPass.oninput = () => {
    confirmPassValidity();
};