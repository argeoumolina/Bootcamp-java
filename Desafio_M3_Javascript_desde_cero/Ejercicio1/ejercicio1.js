// Flujo de caja del último año (Ingreso-Egreso)
const flujoDeCaja = [0, 0, 83528, 133820, -3899, -1091189, 430910, -93756, 39050, -17650, -344290, 70535];

// Función para verificar si hay pérdidas en el flujo de caja
function verificarPerdidas(flujoDeCaja) {
  let sumaFlujo = 0;

  // Sumar todos los valores del flujo de caja seria con este array (Así lo pense)//
  for (let i = 0; i < flujoDeCaja.length; i++) {
    sumaFlujo += flujoDeCaja[i];
  }

  
  if (sumaFlujo < 0) {
    console.log('El flujo de caja genera pérdidas.');
  } 
  else if (sumaFlujo > 0) {
    console.log('El flujo de caja genera ganancias.');
  } 
  else {
    console.log('El flujo de caja está en punto de equilibrio.');
  }
}

// Esta parte es para llamar a la función.//
verificarPerdidas(flujoDeCaja);
