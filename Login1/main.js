const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const lockIcon = submitButton.querySelector('.fas');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;

    if (username === "") {
        usernameError.textContent ='Por favor, ingrese su nombre de usuario.';
        isValid = true;
    } else {
        usernameError.textContent ='Otro mensaje.'
    };

    if (password === "") {
        passwordError.textContent ='Por favor, ingrese su contraseña.';
        isValid = true;
    } else {
        passwordError.textContent ='Otro mensaje.'
    };

    if (isValid) {
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then((response)=> response.json())
        .then((data)=> {
            if (data.success) {
               // lockIcon.classList.remove('fa-lock');
               // lockIcon.classList.add('fa-unlock');
                // Redirigir al usuario a la página principal
            } else {
              //  lockIcon.classList.remove('fa-unlock');
              //  lockIcon.classList.add('fa-lock');
               // Mostrar mensaje de error
  
            }
        })
        .catch((error)=> console.error(error));
    } 
});
