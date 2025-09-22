document.getElementById("Calculo").addEventListener("click", function() {
    let nacimiento = parseInt(document.getElementById("año").value);
    let actual = new Date().getFullYear();
  
    if (isNaN(nacimiento) || nacimiento > actual) {
      document.getElementById("parrafo").textContent = "Ingresa un año válido.";
      return;
    }
  
    let edad = actual - nacimiento;
    document.getElementById("parrafo").textContent = "Edad: " + edad + " años";
  });
  