function openMenu() {                             // Abre el menú
  document.getElementById("mySidebar").style.width = "250px";
}

function closeMenu() {                            // Cierra el menú
  document.getElementById("mySidebar").style.width = "0";
}

const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() =>{
    moveToRight()
}, 3000);

let operacion = 0;
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
        return;
    }
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}   

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
}



//prodctos 

// URL de la API (tu compañero la definirá)
const API_URL = "http://localhost:3000/products";

// Contenedor donde van los productos
const container = document.getElementById("products-container");

// Llamar a la API
fetch(API_URL)
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      // Crear tarjeta
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">$${product.price}</p>
          <button class="btn">Add to Cart</button>
        </div>
      `;

      // Agregar tarjeta al contenedor
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error fetching products:", error));