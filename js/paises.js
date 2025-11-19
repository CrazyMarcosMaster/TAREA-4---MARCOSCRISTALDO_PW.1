document.getElementById("buscarPais").addEventListener("click", async () => {
    const pais = document.getElementById("pais").value;
    const resultado = document.getElementById("resultado");
    if (!pais) return alert("Ingrese un país");

    try {
        const resp = await fetch(`https://restcountries.com/v3.1/name/${pais}`);
        const data = await resp.json();
        if (!data[0]) throw new Error("No encontrado");

        const info = data[0];
        document.getElementById("nombrePais").textContent = info.name.common;
        document.getElementById("capital").textContent = info.capital ? info.capital[0] : "N/A";
        document.getElementById("poblacion").textContent = info.population.toLocaleString();
        document.getElementById("bandera").src = info.flags.png;
        resultado.classList.remove("hidden");
    } catch(err) {
        alert("País no encontrado");
        resultado.classList.add("hidden");
    }
});
