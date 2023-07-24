function obtenerPrecioProducto() {
    let precioProducto = prompt("Ingrese el precio del producto:");
    let precioConvertido = parseFloat(precioProducto);
    if (isNaN(precioConvertido)) {
      alert("¡Error! Debe ingresar un precio válido.");
      return obtenerPrecioProducto();
    } else {
      return precioConvertido;
    }
  }
  
  function calcularPrecioConImpuesto(precio, cantidad) {
    let impuestoPorcentaje = 21;
    let impuesto = (precio * cantidad * impuestoPorcentaje) / 100;
    let precioTotalConImpuesto = precio * cantidad + impuesto;
    return precioTotalConImpuesto;
  }
  
  function main() {
    let precioProducto = obtenerPrecioProducto();
    let cantidadProductos = prompt("Ingrese la cantidad de productos a comprar:");
    let cantidadConvertida = parseInt(cantidadProductos);
    if (isNaN(cantidadConvertida) || cantidadConvertida <= 0) {
      alert("¡Error! Debe ingresar una cantidad válida y mayor que cero.");
      return main();
    }

    let precioConImpuesto = calcularPrecioConImpuesto(precioProducto, cantidadConvertida);
    alert("El precio total con impuesto del 21% por la compra de " + cantidadConvertida + " productos es: $" + precioConImpuesto.toFixed(2));

    let i = 0;
    while (i < cantidadConvertida) {
      console.log("Producto " + (i + 1) + ": $" + precioProducto.toFixed(2));
      i++;
    }
  }
  
  main();
  