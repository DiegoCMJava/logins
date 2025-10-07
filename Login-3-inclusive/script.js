document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    fetch("users.json")
    .then(Response => Response.json())
    .then(data => {
        const user = data.users.find(u => u.username === username && u.password === password);

        if (user) {
            message.textContent = "¡Inicio de sesión exitoso!";
            message.style.color = "green";
            message.style.fontWeight = "bold";
        } else {
            message.textContent = "Usuario o contraseña incorrectos.";
            message.style.color = "red";
            message.style.fontWeight = "bold";
        }
    })
    .catch(error => {
        message.textContent = "Error al cargar los datos.";
            message.style.color = "orange";
            message.style.fontWeight = "bold";
            console.error(error);
    }
    );
});