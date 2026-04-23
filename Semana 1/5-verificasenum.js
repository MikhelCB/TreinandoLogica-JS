//Exercicio para verifica se o numero é negativo, positivo ou 0

function verificaNum(numero) {
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}

console.log(verificaNum(0.5));
