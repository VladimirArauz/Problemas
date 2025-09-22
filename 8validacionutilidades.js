document.getElementById("Calculadora").addEventListener("click", function() {
    let salario = parseFloat(document.getElementById("salario").value);
    let anios = parseInt(document.getElementById("Años").value);
    let porcentaje = 0;
  
    if (isNaN(salario) || isNaN(anios)) {
      document.getElementById("Texto").textContent = "Completa todos los campos.";
      return;
    }
  
    if (anios < 1) porcentaje = 0.05;
    else if (Años < 2) porcentaje = 0.07;
    else if (Años < 5) porcentaje = 0.10;
    else if (Años < 10) porcentaje = 0.15;
    else porcentaje = 0.20;
  
    let utilidad = salario * porcentaje;
    document.getElementById("Texto").textContent = "Utilidad: $" + utilidad.toFixed(2);
  });
  