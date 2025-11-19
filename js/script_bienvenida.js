document.addEventListener('DOMContentLoaded', () => {
    const mensaje = document.getElementById('mensajeBienvenida');
    const nombreUsuario = document.getElementById('nombreUsuario');

    let nombre = prompt("Por favor, ingresa tu nombre:");
    let apellido = prompt("Por favor, ingresa tu apellido:");

    if(nombre && apellido){
        mensaje.textContent = `¡Bienvenido al proyecto, ${nombre} ${apellido}!`;
        nombreUsuario.textContent = `Hola, ${nombre} ${apellido}`;
    } else {
        mensaje.textContent = "Bienvenido al proyecto. Selecciona la API que deseas explorar:";
    }
});
