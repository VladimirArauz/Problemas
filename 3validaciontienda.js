document.getElementById("Calcular").addEventListener("click", function() {
  let compra = parseFloat(document.getElementById("compra").value);
  if (isNaN(compra) || compra <= 0) {
    document.getElementById("parrafo").textContent = "Ingresa un valor válido";
    return;
  }
  let total = compra * 0.85;
  document.getElementById("parrafo").textContent = "Total a pagar: $" + total.toFixed(2);
});

  