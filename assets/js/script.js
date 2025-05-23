const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inPeso = e.target.querySelector("#peso");
  const inAltura = e.target.querySelector("#altura");

  const peso = Number(inPeso.value);
  const altura = Number(inAltura.value);

  if (!peso) {
    setResultado("Peso Invalido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura invalida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const resultImc = getResultImc(imc);
  const msg = `O seu IMC é: ${imc} (${resultImc})`;

  setResultado(msg, true);
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function getImc(peso, altura) {
  const imc = peso / (altura / 100) ** 2;
  return imc.toFixed(2);
}

function getResultImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
