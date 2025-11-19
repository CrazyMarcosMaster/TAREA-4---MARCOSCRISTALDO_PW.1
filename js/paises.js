document.getElementById("buscarPais").addEventListener("click", async () => {
    const pais = document.getElementById("pais").value.trim();
    const resultado = document.getElementById("resultado");
    if (!pais) return alert("Ingrese un país");

    try {
        const resp = await fetch(`https://restcountries.com/v3.1/name/${pais}`);
        const data = await resp.json();
        if (!data[0]) throw new Error("No encontrado");

        document.getElementById("nombrePais").textContent = data[0].name.common;
        document.getElementById("capital").textContent = data[0].capital ? data[0].capital[0] : "N/A";
        document.getElementById("poblacion").textContent = data[0].population.toLocaleString();
        document.getElementById("bandera").src = data[0].flags.png;
        resultado.classList.remove("hidden");
    } catch(err) {
        alert("País no encontrado");
        resultado.classList.add("hidden");
    }
});
