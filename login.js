document.querySelector('#register').addEventListener('click', function () {
    const nameValue = document.querySelector('#registerName').value
    const emailValue = document.querySelector('#registerEmail').value
    const passwordValue = document.querySelector('#registerPassword').value

    fetch('https://weatherapp-backend-sigma-five.vercel.app/users/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        })
    }).then(reponse => reponse.json()).then(data=> {
        if (data.result) {
            window.location.assign("index.html")
        }
    })
})

document.querySelector('#connection').addEventListener('click', function () {
    const emailValue = document.querySelector('#connectionEmail').value
    const passwordValue = document.querySelector('#connectionPassword').value

    fetch('https://weatherapp-backend-sigma-five.vercel.app/users/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
        })
    }).then(reponse => reponse.json()).then(data=> {
        if (data.result) {
            window.location.assign("index.html")
        }
    })
})