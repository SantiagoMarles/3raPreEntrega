
 const productos = [
    {
      "id": 1,
      "nombre": "Camiseta",
      "precio": 19.99,
      "color": "Negro",
      "talla": "M",
      "img": "img/camiseta.jpg"
    },
    {
      "id": 2,
      "nombre": "Pantalón",
      "precio": 29.99,
      "color": "Negro - Gris",
      "talla": "L",
      "img": "img/pantalon.jpg"
    },
    {
      "id": 3,
      "nombre": "Vestido",
      "precio": 39.99,
      "color": "Azul",
      "talla": "S",
      "img": "img/vestido.jpg"
    },
    {
      "id": 4,
      "nombre": "Chaqueta",
      "precio": 49.99,
      "color": "Cafe",
      "talla": "XL",
      "img": "img/chaqueta.jpg"
    },
    {
      "id": 5,
      "nombre": "Medias",
      "precio": 5.55,
      "color": "Gris",
      "talla": "30",
      "img": "img/medias.jpg"
    },
    {
      "id": 6,
      "nombre": "Zapatos",
      "precio": 199.99,
      "color": "Cafe",
      "talla": "XL",
      "img": "img/zapatos.jpg"
    },
    {
      "id": 7,
      "nombre": "Buzo",
      "precio": 149.99,
      "color": "Blanco",
      "talla": "XL",
      "img": "img/buzo.jpg"
    },
    {
      "id": 8,
      "nombre": "Gafas",
      "precio": 49.99,
      "color": "transparentes",
      "talla": "XL",
      "img": "img/gafas.jpg"
    },
    {
      "id": 9,
      "nombre": "Olla",
      "precio": 49.99,
      "color": "Naranja",
      "talla": "XL",
      "img": "img/olla.jpg"
    },
    {
      "id": 10,
      "nombre": "Chanclas",
      "precio": 49.99,
      "color": "Beige",
      "talla": "XL",
      "img": "img/chanclas.jpg"
    },
    
  ]



document.addEventListener("DOMContentLoaded", function() {
  var username = localStorage.getItem("username");

  if (username) {
    document.getElementById("username").textContent = username;
  } else {
    window.location.href = "index.html";
  }
});

document.getElementById('logout').addEventListener("click", function() {
  console.log("hice click ")
  localStorage.removeItem("username");
  window.location.href = "index.html";
  return false;
});



var contenedorProductos = document.getElementById("contenedorProductos");


for (var i = 0; i < productos.length; i++) {
  var tarjeta = document.createElement("div");
  tarjeta.classList.add("card");

  var producto = productos[i];
  var contenidoTarjeta = `
    <h2>${producto.nombre}</h2>
    <img class="image" src="${producto.img}" alt="${producto.nombre}">
    <p>Precio: $${producto.precio}</p>
    <p>Color: ${producto.color}</p>
    <p>Talla: ${producto.talla}</p>
    <button class="btn-primary" id="comprar-${producto.id}">Comprar</button>
  `;

  tarjeta.innerHTML = contenidoTarjeta;

  contenedorProductos.appendChild(tarjeta);
}


var dialog = document.getElementById("dialogoConfirmacion");

contenedorProductos.addEventListener("click", function(event) {
  if (event.target.classList.contains("btn-primary")) {
    var botonComprarId = event.target.id;
    var idProducto = botonComprarId.split("-")[1];

    var producto = productos.find(function(p) {
      return p.id === parseInt(idProducto);
    });

    var carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

    carritoCompras.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carritoCompras));

    dialog.showModal();

    document.getElementById("dialogoContenido").textContent = "El producto se ha agregado al carrito de compras.";

    setTimeout(function() {
      dialog.close();
    }, 2000);

    event.stopPropagation();
  }
});


document.querySelector('nav').addEventListener("click", function(event) {
  if (event.target.getAttribute("href") === "carrito.html") {
    event.preventDefault();
    window.location.href = "carrito.html";
  }
});
