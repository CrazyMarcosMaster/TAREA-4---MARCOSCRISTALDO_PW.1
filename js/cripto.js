document.getElementById("buscarCripto").addEventListener("click", async () => {
    const moneda = document.getElementById("moneda").value;
    const resultado = document.getElementById("resultado");
    if (!moneda) return alert("Seleccione una moneda");

    try {
        const resp = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${moneda}`);
        const data = await resp.json();
        const info = data[0];

        document.getElementById("nombreCripto").textContent = info.name;
        document.getElementById("precio").textContent = info.current_price;
        document.getElementById("cambio").textContent = info.price_change_percentage_24h + "%";
        document.getElementById("market").textContent = info.market_cap.toLocaleString();
        resultado.classList.remove("hidden");
    } catch(err) {
        alert("Error al consultar moneda");
        resultado.classList.add("hidden");
    }
});
