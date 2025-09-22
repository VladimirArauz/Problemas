document.getElementById("Cal").addEventListener("click", function() {
    let horas = parseInt(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);
    let total = 0;
  
    if (isNaN(horas) || isNaN(pago)) {
      document.getElementById("p").textContent = "Completa todos los campos.";
      return;
    }
  
    if (horas <= 40) {
      total = horas * pago;
    } else {
      let extras = horas - 40;
      if (extras <= 8) {
        total = 40*pago + extras*pago*2;
      } else {
        total = 40*pago + 8*pago*2 + (extras-8)*pago*3;
      }
    }
  
    document.getElementById("p").textContent = "Pago total: $" + total.toFixed(2);
  });
  