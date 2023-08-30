
function éPrimo(num) {
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  return true;
   
}


document
  .getElementById("sorteador")
  .addEventListener("click", function () {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    const numeros = [];
    for (let i = 0; i < 10; i++) {
      const numeroAleatório = Math.floor(Math.random() * 20) + 1;
      numeros.push(numeroAleatório);
    }

    numeros.forEach((num) => {
      const parágrafo = document.createElement("p");
      parágrafo.textContent = `numero: ${num} - ${
        num % 2 === 0 ? "Par" : "Ímpar"
      } - ${éPrimo(num) ? "Primo" : "Não Primo"}`;
      resultadoDiv.appendChild(parágrafo);
    });
  });