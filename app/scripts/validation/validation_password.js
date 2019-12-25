let pass = document.querySelector('.password');

function checkPassCondition(condition){
    return (condition) ? out.innerHTML = '8 symbols and more' : out.style.color = 'green';
}

function passwordValidity() {
    return checkPassCondition(pass.value.length < 8);
}

pass.oninput = () => {
    passwordValidity();
};

