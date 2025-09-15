    const minRange = document.getElementById("minRange");
    const maxRange = document.getElementById("maxRange");
    const minValue = document.getElementById("minValue");
    const maxValue = document.getElementById("maxValue");
    const sliderTrack = document.querySelector(".slider-track");

    let minGap = 50;
    let sliderMaxValue = maxRange.max;

    function fillColor() {
      let percent1 = (minRange.value / sliderMaxValue) * 100;
      let percent2 = (maxRange.value / sliderMaxValue) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #bbb ${percent1}%, #333 ${percent1}%, #333 ${percent2}%, #bbb ${percent2}%)`;
    }

    minRange.addEventListener("input", () => {
      if (parseInt(maxRange.value) - parseInt(minRange.value) <= minGap) {
        minRange.value = parseInt(maxRange.value) - minGap;
      }
      minValue.textContent = `$${minRange.value}`;
      fillColor();
    });

    maxRange.addEventListener("input", () => {
      if (parseInt(maxRange.value) - parseInt(minRange.value) <= minGap) {
        maxRange.value = parseInt(minRange.value) + minGap;
      }
      maxValue.textContent = `$${maxRange.value}`;
      fillColor();
    });

    window.addEventListener("load", fillColor);