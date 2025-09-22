const form = document.getElementById("Formulariocalculadora");
const resultado = document.getElementById("resultado");

const tasa = 0.02; // 2% fijo

form.addEventListener("submit", function(event) {
    event.preventDefault(); // 🔹 Evita que se recargue la página

    const capital = parseFloat(document.getElementById("monto").value);

    if (isNaN(capital) || capital <= 0) {
        resultado.textContent = "Por favor, ingresa un monto válido.";
        return;
    }

    const ganancia = capital * tasa;
    const total = capital + ganancia;

    resultado.textContent = `La tasa aplicada fue del ${(tasa * 100).toFixed(0)}%. 
    Su ganancia será de $${ganancia.toFixed(2)} 
    y el total en la cuenta será $${total.toFixed(2)}.`;
});

