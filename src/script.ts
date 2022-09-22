let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLInputElement;
let resultado = document.getElementById("resultado") as HTMLInputElement;

function calcular(n1: number, n2: number) {
  if (typeof n1 == "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return +n1 + +n2;
  }
}

botao.addEventListener("click", function () {
  resultado.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
