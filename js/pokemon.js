document.getElementById("buscarPokemon").addEventListener("click", async () => {
    const nombre = document.getElementById("pokemon").value.toLowerCase().trim();
    const resultado = document.getElementById("resultado");
    if (!nombre) return alert("Ingrese nombre o ID");

    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!resp.ok) throw new Error("No encontrado");
        const data = await resp.json();

        document.getElementById("nombrePokemon").textContent = data.name;
        document.getElementById("imagenPokemon").src = data.sprites.front_default;
        document.getElementById("tipo").textContent = data.types.map(t => t.type.name).join(", ");
        document.getElementById("peso").textContent = data.weight;
        resultado.classList.remove("hidden");
    } catch(err) {
        alert("Pokémon no encontrado");
        resultado.classList.add("hidden");
    }
});
