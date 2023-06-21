const costosFijos = 1000;
const precioVenta = 50;
const costosVariables = 30;

//Los precios de arriba solo son un ejemplo, las cantidades pueden ser modificadas según se requiera//

function calcularPuntoEquilibrio(costosFijos, precioVenta, costosVariables) {
  const volumenVentas = costosFijos / (precioVenta - costosVariables);
  return volumenVentas;
}
const resultado = calcularPuntoEquilibrio(costosFijos, precioVenta, costosVariables);
console.log("El resultado de la fórmula es " + resultado);
