const container = document.querySelector(".container");
const numInput = document.querySelector("#numero");
const btnCalc = document.querySelector("#btnCalc");
const form = container.querySelector("form");
const lista = document.querySelector("#lista");
const title = document.querySelector("#title");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function criaLi(msg) {
  const li = document.createElement("li");
  li.innerText = msg;

  return li;
}

function criaSpan(spanTxt) {
  const span = document.createElement("span");
  span.innerText = spanTxt;

  return span;
}

function calcularTabuada(num) {
  let tabuada = [];

  for (let i = 1; i <= 10; i++) {
    tabuada.push(i * num);
  }

  return tabuada;
}

btnCalc.addEventListener("click", () => {
  lista.innerText = "";

  if (isNaN(numInput.value) || numInput.value === "") {
    alert("Digite apenas números!");

    return;
  }

  const num = Number(numInput.value);

  title.innerText = `Tabuada do ${num}`;

  const tabuada = calcularTabuada(num);

  tabuada.forEach((valor, index) => {
    const li = criaLi(`${index + 1} x ${num} = ${valor}`);

    lista.appendChild(li);
  });
});
