// let numero = 10;

// if (numero % 2 === 0) {
//   console.log("Este número é par");
// } else {
//   console.log("Este número é impar");
// }

//Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

function VerificaNumero(numero) {
  if (numero % 2 == 0) {
    return "Este numero é par";
  } else {
    return "Este numero é impar";
  }
}

console.log(VerificaNumero(3));

//O return é o que a função entrega de volta quando termina.
//a função recebe algo → processa → retorna um resultado
