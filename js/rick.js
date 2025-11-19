document.getElementById("buscarRick").addEventListener("click", async () => {
    const id = document.getElementById("id").value;
    const resultado = document.getElementById("resultado");
    if (!id) return alert("Ingrese un ID");

    try {
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!resp.ok) throw new Error("No encontrado");
        const data = await resp.json();

        document.getElementById("nombreRick").textContent = data.name;
        document.getElementById("imagenRick").src = data.image;
        document.getElementById("estado").textContent = data.status;
        document.getElementById("especie").textContent = data.species;
        resultado.classList.remove("hidden");
    } catch(err) {
        alert("Personaje no encontrado");
        resultado.classList.add("hidden");
    }
});
