const minRange = document.getElementById("min-price");
const maxRange = document.getElementById("max-price");
const minValue = document.getElementById("min-price-value");
const maxValue = document.getElementById("max-price-value");
const progressBar = document.querySelector(".price-slider .progress");

function updateRange() {
  let min = parseInt(minRange.value);
  let max = parseInt(maxRange.value);

  // Evita que se crucen
  if (min > max - 50) {
    minRange.value = max - 50;
    min = max - 50;
  }
  if (max < min + 50) {
    maxRange.value = min + 50;
    max = min + 50;
  }

  minValue.textContent = `$${min}`;
  maxValue.textContent = `$${max}`;

  // Calcula la posición de la barra verde
  let percentMin = (min / minRange.max) * 100;
  let percentMax = (max / maxRange.max) * 100;

  progressBar.style.left = percentMin + "%";
  progressBar.style.width = (percentMax - percentMin) + "%";
}

// Eventos
minRange.addEventListener("input", updateRange);
maxRange.addEventListener("input", updateRange);

// Inicializar
updateRange();
