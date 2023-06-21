document.getElementById('calculateBtn').addEventListener('click', function() {
    var income = parseFloat(document.getElementById('income').value);
  
    var necessaryExpenses = income * 0.5;
    var optionalExpenses = income * 0.3;
    var savingsAndInvestments = income * 0.2;
  
    document.getElementById('resultContainer').innerHTML = 
      'Gastos necesarios: $' + necessaryExpenses.toFixed(2) + '<br>' +
      'Gastos opcionales: $' + optionalExpenses.toFixed(2) + '<br>' +
      'Ahorro e inversión: $' + savingsAndInvestments.toFixed(2);
  });
  