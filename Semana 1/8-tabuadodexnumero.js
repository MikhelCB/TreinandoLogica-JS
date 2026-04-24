// 8.	Tabuada de um número (1 a 10)

//for padrão
let num = 4;

for (i = 1; i <= 10; i++) {
  multiplicacao = num * i;
  console.log(`${num} * ${i} = ${multiplicacao}`);
}

//função
function tabuada(num1) {
  for (i = 1; i <= 10; i++) {
    console.log(`${num1} * ${i} = ${num1 * i}`);
  }
}
tabuada(2);
