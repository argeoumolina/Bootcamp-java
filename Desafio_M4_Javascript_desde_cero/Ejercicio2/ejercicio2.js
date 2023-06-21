const alternativasCredito = [
    { capital: 150000, plazo: 30, tasa: 0.15 },
    { capital: 300000, plazo: 180, tasa: 0.10 },
    { capital: 485000, plazo: 60, tasa: 0.23 }
  ];
  
  function calcularInteres(inversiones) {
    const informacionCredito = [];
  
    for (let i = 0; i < inversiones.length; i++) {
      const inversion = inversiones[i];
      const { capital, plazo, tasa } = inversion;
  
      // Calcular el interés
      const interes = (capital * plazo * tasa) / 100;
  
      informacionCredito.push({
        ...inversion,
        interes
      });
    }
  
    return informacionCredito;
  }
  
  const informacionCredito = calcularInteres(alternativasCredito);
  console.log(informacionCredito);
  