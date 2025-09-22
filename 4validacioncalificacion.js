document.getElementById("btn2").addEventListener("click", function() {
    let p1 = parseFloat(document.getElementById("par1").value);
    let p2 = parseFloat(document.getElementById("par2").value);
    let p3 = parseFloat(document.getElementById("par3").value);
    let examen = parseFloat(document.getElementById("examen").value);
    let trabajo = parseFloat(document.getElementById("trabajo").value);
  
    if ([p1,p2,p3,examen,trabajo].some(isNaN)) {
      document.getElementById("res2").textContent = "Completa todos los campos.";
      return;
    }
  
    let promedio = (p1+p2+p3)/3;
    let notaFinal = promedio*0.55 + examen*0.30 + trabajo*0.15;
    document.getElementById("res2").textContent = "Nota final: " + notaFinal.toFixed(2);
  });
  