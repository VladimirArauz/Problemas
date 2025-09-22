const form = document.getElementById("Formulariosueldo");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recargar la página

  const sueldo = parseFloat(document.getElementById("sueldo").value);
  const venta1 = parseFloat(document.getElementById("venta1").value);
  const venta2 = parseFloat(document.getElementById("venta2").value);
  const venta3 = parseFloat(document.getElementById("venta3").value);

  if (isNaN(sueldo) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
    resultado.textContent = "Por favor ingresa todos los valores correctamente.";
    return;
  }

  // Comisión del 10% sobre el total de ventas
  const totalVentas = venta1 + venta2 + venta3;
  const comision = totalVentas * 0.10;

  // Sueldo total con comisiones
  const totalMes = sueldo + comision;

  resultado.textContent = `El vendedor recibirá $${comision.toFixed(2)} por comisiones 
  y un total de $${totalMes.toFixed(2)} en el mes.`;
});

