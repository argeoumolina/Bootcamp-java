// Datos de las alternativas de crédito
const alternativasCredito = [
    { capital: 150000, plazo: 30, tasa: .15 },
    { capital: 300000, plazo: 180, tasa: .10 },
    { capital: 485000, plazo: 60, tasa: .23 }
  ];
  
  
  const informacionCredito = [];
  
  for (let i = 0; i < alternativasCredito.length; i++) {
    const alternativa = alternativasCredito[i];
    const { capital, plazo, tasa } = alternativa;
  
    // Calcular el interes
    const interes = (capital * plazo * tasa) / 100;
  
   
    informacionCredito.push({
      capital,
      plazo,
      tasa,
      interes
    });
  }
  
 
  console.log(informacionCredito);