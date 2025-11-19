const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

// COMPROBAR SI EL FORMATO DEL CORREO ES CORRECTO
emailInput.addEventListener('blur', function(){
    const email = emailInput.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage.style.display = 'none';
        
    } else {
        
        errorMessage.style.display = 'block';
    }
});


// VALIDAR DATOS 
// Cargar el archivo JSON
fetch('data.json')
.then(response => response.json())
.then(data => {
    const users = data.users;

    // Obtener los valores del formulario
    const form = document.getElementById('login');
    const emailInput = document.getElementById('email');
    const pwdInput = document.getElementById('pwd');

    // Agregar un event listener al formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const pwd = pwdInput.value;

        // Validar la información
        const validUser  = users.find( (user)=>{
            return user.email === email && user.password === pwd;
        });

        if(validUser){
            alert("¡Te damos la bienvenida! "+email)
        } else {
            alert("Revisa tu correo o contraseña")
        }
    });
})
.catch((error => {
    alert('Error al cargar el archivo JSON: ', error);
}
));