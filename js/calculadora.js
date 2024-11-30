document.getElementById("calculateHumanAge").addEventListener("click", () => {
    const catAgeInput = document.getElementById("catAge").value;
    const catAge = Number(catAgeInput); // Usamos Number en lugar de parseFloat
    const resultElement = document.getElementById("humanAgeResult");
  
    if (isNaN(catAge) || catAge <= 0) {
      resultElement.textContent = "Por favor, ingresa una edad válida para tu gato.";
      return;
    }
  
    let humanAge; // Definimos la variable para calcular sin usar el operador ?
    if (catAge <= 2) {
      humanAge = catAge * 12.5;
    } else {
      humanAge = 25 + (catAge - 2) * 4;
    }
  
    resultElement.textContent = `Tu gato tiene aproximadamente ${humanAge.toFixed(1)} años humanos.`;
  });
  
  // Calculadora de edad humana a gatuna
  document.getElementById("calculateCatAge").addEventListener("click", () => {
    const humanAgeInput = document.getElementById("humanAge").value;
    const humanAge = Number(humanAgeInput); // Usamos Number en lugar de parseFloat
    const resultElement = document.getElementById("catAgeResult");
  
    if (isNaN(humanAge) || humanAge <= 0) {
      resultElement.textContent = "Por favor, ingresa una edad válida.";
      return;
    }
  
    let catAge; // Definimos la variable para calcular sin usar el operador ?
    if (humanAge <= 25) {
      catAge = humanAge / 12.5;
    } else {
      catAge = 2 + (humanAge - 25) / 4;
    }
  
    resultElement.textContent = `Tu edad en años gatunos sería aproximadamente ${catAge.toFixed(1)} años de gato.`;
  });