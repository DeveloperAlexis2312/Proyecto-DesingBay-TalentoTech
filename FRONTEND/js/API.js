const apiUrl = "https://www.artic.edu/iiif/2/";
const imgSize = "/full/300,/0/default.jpg"; // imagen un poco más grande

fetch("https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,department_title,thumbnail")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("pokemon-container");
    contenedor.innerHTML = "";
    data.data.forEach(artWork => {
      const imgUrl = artWork.image_id ? apiUrl + artWork.image_id + imgSize : "https://via.placeholder.com/300x200?text=Sin+Imagen";
      const title = artWork.title ?? "Sin título";
      const category = artWork.department_title ?? "Sin categoría";
      const price = `$${(Math.random() * 500 + 50).toFixed(2)}`; // simular precio

      contenedor.innerHTML += `
        <div class="product-card">
          <img src="${imgUrl}" alt="${title}">
          <div class="product-info">
            <h3 class="product-title">${title}</h3>
            <p class="product-category">${category}</p>
            <p class="product-price">${price}</p>
          </div>
          <div class="product-actions">
            <button class="btn add-cart">Añadir Carrito</button>
            <button class="btn details">Detalles</button>
          </div>
        </div>
      `;
    });
  })
  .catch(error => {
    document.getElementById("pokemon-container").innerHTML = "Error al cargar las pinturas";
    console.log(error);
  });
