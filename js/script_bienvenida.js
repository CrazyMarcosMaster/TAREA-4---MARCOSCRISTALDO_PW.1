document.addEventListener('DOMContentLoaded', () => {
    const mensaje = document.getElementById('mensajeBienvenida');
    const nombreUsuario = document.getElementById('nombreUsuario');

    if (!sessionStorage.getItem('nombreCompleto')) {
        let nombre = prompt("Por favor, ingresa tu nombre:");
        let apellido = prompt("Por favor, ingresa tu apellido:");
        if(nombre && apellido){
            const nombreCompleto = `${nombre} ${apellido}`;
            sessionStorage.setItem('nombreCompleto', nombreCompleto);
            if(mensaje) mensaje.textContent = `¡Bienvenido al proyecto, ${nombreCompleto}!`;
            if(nombreUsuario) nombreUsuario.textContent = `Hola, ${nombreCompleto}`;
        }
    } else {
        const nombreCompleto = sessionStorage.getItem('nombreCompleto');
        if(mensaje) mensaje.textContent = `¡Bienvenido al proyecto, ${nombreCompleto}!`;
        if(nombreUsuario) nombreUsuario.textContent = `Hola, ${nombreCompleto}`;
    }
});
