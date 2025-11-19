document.addEventListener("DOMContentLoaded", () => {
    let nombre = localStorage.getItem("nombreUsuario");

    if (!nombre) {
        nombre = prompt("Ingrese su nombre y apellido:");
        if (nombre) localStorage.setItem("nombreUsuario", nombre);
    }

    document.getElementById("bienvenida").textContent = 
        "Bienvenido/a " + nombre;
});
