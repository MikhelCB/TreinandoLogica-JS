//7.	Criar função que recebe 2 números e retorna o maior

function retornaMaior(num1, num2) {
  if (num1 > num2) {
    return `O maior número é o ${num1}`;
  } else if (num2 > num1) {
    return `O maior número é o ${num2}`;
  } else if (num1 === num2) {
    return "Os numeros são iguais";
  }
}

console.log(retornaMaior(5123, 5123));
