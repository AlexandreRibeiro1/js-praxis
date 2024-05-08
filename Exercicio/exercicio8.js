// Escreva um programa que receba uma operação matemática e dois operandos:
// "soma": Adicionar os dois operandos. // "subtração": Subtrair o segundo operando do primeiro. // "multiplicação": Multiplicar os dois operandos. // "divisão": Dividir o primeiro operando pelo segundo.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function realizarOperacao(operacao, operando1, operando2) {
  switch (operacao.toLowerCase()) {
    case "soma":
      return operando1 + operando2;
    case "subtracao":
      return operando1 - operando2;
    case "multiplicacao":
      return operando1 * operando2;
    case "divisao":
      if (operando2 !== 0) {
        return operando1 / operando2;
      } else {
        return "Erro: divisão por zero";
      }
    default:
      return "Operação inválida";
  }
}

rl.question(
  "Digite a operação matemática (soma, subtracao, multiplicacao, divisao): ",
  (operacao) => {
    rl.question("Digite o primeiro operando: ", (operando1) => {
      rl.question("Digite o segundo operando: ", (operando2) => {
        const resultado = realizarOperacao(
          operacao,
          parseFloat(operando1),
          parseFloat(operando2)
        );
        console.log("O resultado da operação é:", resultado);
        rl.close();
      });
    });
  }
);
