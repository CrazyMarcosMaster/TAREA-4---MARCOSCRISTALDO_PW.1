const API_KEY = "84482fca6b138daed48e052965cb59de"; // Tu API Key activa

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('ciudad');
  const btnBuscar = document.getElementById('buscarClima');
  const btnAsu = document.getElementById('btnAsuncion');

  btnBuscar.addEventListener('click', () => buscarClima(input.value));
  btnAsu.addEventListener('click', () => buscarClima('Asuncion'));
});

// Función principal
async function buscarClima(ciudad) {
  const errorEl = document.getElementById('error');
  const card = document.getElementById('resultado');
  errorEl.classList.add('hidden');
  card.classList.add('hidden');

  if (!ciudad || !ciudad.trim()) {
    errorEl.textContent = 'Ingrese una ciudad.';
    return errorEl.classList.remove('hidden');
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${API_KEY}&units=metric&lang=es`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) throw new Error(data.message);

    document.getElementById('nombreCiudad').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperatura').textContent = Math.round(data.main.temp);
    document.getElementById('humedad').textContent = data.main.humidity;
    document.getElementById('viento').textContent = data.wind.speed;
    document.getElementById('descripcion').textContent = capitalize(data.weather[0].description);
    document.getElementById('icono').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('icono').alt = data.weather[0].main;

    card.classList.remove('hidden');
  } catch(err) {
    errorEl.textContent = "Ciudad no encontrada.";
    errorEl.classList.remove('hidden');
  }
}

// Capitalizar primera letra
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
