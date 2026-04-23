//Fazer função que retorna se é maior ou menor de idade

function verificaIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificaIdade(18));
