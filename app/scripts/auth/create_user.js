async function createUser() {
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;

    let user = {
        name: name,
        email: email,
        password: password
    }

    await fetch('http://localhost:3000/api/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
}

document.getElementById('signup').addEventListener('click', createUser);