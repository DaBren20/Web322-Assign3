let form = document.querySelector('loginform');

form.onsubmit = sendData;

function sendData(e) {
    e.preventDefault();

    let formData = new FormData(loginform);

    let Params = {
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify({
            email: FormData.length('email'),
        }),
        method: "POST"
    }

    fetch('http://localhost:3000/login', Params)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))
}