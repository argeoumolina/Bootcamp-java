$(document).ready(function() {
    $('#calcularBtn').click(function() {
      // Obtener los valores de los campos de entrada
      var costosFijos = parseFloat($('#costosFijos').val());
      var precioVenta = parseFloat($('#precioVenta').val());
      var costosVariables = parseFloat($('#costosVariables').val());
  
      // Realizar el cálculo del punto de equilibrio
      var puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
  
      // Mostrar el resultado en el contenedor 'resultado'
      $('#resultado').text('El punto de equilibrio es: ' + puntoEquilibrio.toFixed(2));
    });
  });