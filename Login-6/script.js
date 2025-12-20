// variables
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const showPasswordBtn = document.getElementById('showPassword');
const passwordInput = document.getElementById('idPwd');
const showPasswordIcon = document.querySelector('.icon');



// FUNCTIONS 

// validate email format
emailInput.addEventListener('blur', function(){
    const email = emailInput.value;
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
});
// clear error message on focus
emailInput.addEventListener('focus', function(){
    errorMessage.style.display = 'none';
});


// show password
function showPassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordIcon.classList.remove("fa-eye-slash");
        showPasswordIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        showPasswordIcon.classList.remove("fa-eye");
        showPasswordIcon.classList.add("fa-eye-slash");
    }
}
showPasswordBtn.addEventListener('click', () =>{
    showPassword();
});

// validate data
fetch('/Login-6/data.json')
.then(response => response.json())
.then(data => {
    const users = data.users;

    const loginForm = document.getElementById('login');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('idPwd');

    loginForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        const validUser = users.find( (user) => {
            return user.email === email && user.password === password;
        });
        if(validUser) {
            alert("Inicio de sesión exitoso");
            window.location.href = "/Login-6/index.html";

        } else {
            alert("Correo electrónico o contraseña incorrectos");
        }
    });
})
.catch((error => {
    alert("Error al cargar el archivo de datos: ", error);
}
));