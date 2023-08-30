function éPrimo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

document
  .getElementById("sortButton")
  .addEventListener("click", function () {
    const resultadoDiv = document.getElementById("result");
    resultadoDiv.innerHTML = "";

    const números = [];
    for (let i = 0; i < 10; i++) {
      const númeroAleatório = Math.floor(Math.random() * 20) + 1;
      números.push(númeroAleatório);
    }

    números.forEach((num) => {
      const parágrafo = document.createElement("p");
      parágrafo.textContent = `Número: ${num} - ${
        num % 2 === 0 ? "Par" : "Ímpar"
      } - ${éPrimo(num) ? "Primo" : "Não Primo"}`;
      resultadoDiv.appendChild(parágrafo);
    });
  });