function calcular(operacion, valorA, valorB) {
    var resultado;
  
    switch (operacion) {
      case 'SUMAR':
        resultado = valorA + valorB;
        break;
      case 'RESTAR':
    resultado = valorA - valorB;
        break;
      case 'MULTIPLICAR':
        resultado = valorA * valorB;
        break;
    case 'DIVIDIR':
    resultado = valorA / valorB;
    break;
      default:
        console.log('Error');
        return;
    }
  
    console.log('El resultado es:', resultado);
    return resultado;
  }

  module.exports = calcular;