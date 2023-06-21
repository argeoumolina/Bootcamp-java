function calcularDistribucionIngresos(ingresoTotal) {
  const gastosNecesarios = ingresoTotal*0.5;
  const gastosOpcionales = ingresoTotal*0.3;
  const ahorroEInversion = ingresoTotal*0.2;

  return {
    gastosNecesarios: gastosNecesarios,
    gastosOpcionales: gastosOpcionales,
    ahorroEInversion: ahorroEInversion
  };
}

const ingresoTotal = 100; //esta cantidad varía según el presupuesto que se proporcione al programa//
const distribucionDeGastos = calcularDistribucionIngresos(ingresoTotal);

console.log('Monto para los gastos necesarios:', distribucionDeGastos.gastosNecesarios);
console.log('Monto para los gastos opcionales:', distribucionDeGastos.gastosOpcionales);
console.log('Monto para el ahorro e inversión:', distribucionDeGastos.ahorroEInversion);

console.log('Este cálculo fue generado a partir del presupuesto proporcionado '+'('+ ingresoTotal +')')