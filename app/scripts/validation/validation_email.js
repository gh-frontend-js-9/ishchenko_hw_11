let out = document.querySelector('.out');
let email = document.querySelector('.email');
let password = document.querySelector('input[type="passwoed"]');

function checkEmailCondition(condition){
   return (condition) ? out.innerHTML = 'Invalid email' : out.innerHTML = 'Approved';
}

function emailValidity() {
    let regexp = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$');
    return checkEmailCondition(!email.value.match(regexp));
}

email.oninput = () => {
    emailValidity();
};
