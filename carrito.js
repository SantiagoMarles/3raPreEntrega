var carritoCompras = JSON.parse(localStorage.getItem("carrito"));
var contenedorCarrito = document.getElementById("contenedorCarrito");

if (carritoCompras && carritoCompras.length > 0) {
  var carritoProductos = {};

  for (var i = 0; i < carritoCompras.length; i++) {
    var producto = carritoCompras[i];
    if (carritoProductos[producto.id]) {
      carritoProductos[producto.id].cantidad++;
    } else {
      carritoProductos[producto.id] = {
        producto: producto,
        cantidad: 1
      };
    }
  }

  var listaCarrito = document.createElement("ul");

  for (var productId in carritoProductos) {
    var carritoItem = carritoProductos[productId];
    var producto = carritoItem.producto;
    var cantidad = carritoItem.cantidad;
    var itemLista = document.createElement("li");
    var precioTotal = producto.precio * cantidad;
    itemLista.textContent = `${producto.nombre} x ${cantidad} - $${precioTotal.toFixed(2)}`;
    listaCarrito.appendChild(itemLista);
  }

  contenedorCarrito.appendChild(listaCarrito);
} else {
  contenedorCarrito.textContent = "El carrito de compras está vacío.";
}

var vaciarCarritoBtn = document.getElementById("vaciarCarrito");

vaciarCarritoBtn.addEventListener("click", function() {
  localStorage.removeItem("carrito");
  contenedorCarrito.textContent = "El carrito de compras está vacío.";
});
