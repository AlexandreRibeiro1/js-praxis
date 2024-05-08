// Escreva um programa que receba um número inteiro representando a operação a ser realizada:
// 1: Adicionar um elemento no final do array. // 2: Remover o último elemento do array. // 3: Remover o primeiro elemento do array. // 4: Exibir todos os elementos do array. // 0: Sair do programa.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let array = [];

function adicionarElemento() {
  rl.question("Digite o número a ser adicionado: ", (numero) => {
    array.push(parseInt(numero));
    console.log("Número adicionado com sucesso.");
    menu();
  });
}
function removerUltimoElemento() {
  if (array.length === 0) {
    console.log("O array está vazio, não é possível remover elementos.");
  } else {
    array.pop();
    console.log("Último elemento removido com sucesso.");
  }
  menu();
}
function removerPrimeiroElemento() {
  if (array.length === 0) {
    console.log("O array está vazio, não é possível remover elementos.");
  } else {
    array.shift();
    console.log("Primeiro elemento removido com sucesso.");
  }
  menu();
}
function exibirElementos() {
  if (array.length === 0) {
    console.log("O array está vazio.");
  } else {
    console.log("Elementos do array:");
    array.forEach((element) => {
      console.log(element);
    });
  }
  menu();
}
function sairDoPrograma() {
  console.log("Saindo do programa...");
  rl.close();
}
function menu() {
  console.log("---------------------");
  console.log("Menu:");
  console.log("1. Adicionar elemento");
  console.log("2. Remover último elemento");
  console.log("3. Remover primeiro elemento");
  console.log("4. Exibir todos os elementos");
  console.log("0. Sair do programa");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionarElemento();
        break;
      case "2":
        removerUltimoElemento();
        break;
      case "3":
        removerPrimeiroElemento();
        break;
      case "4":
        exibirElementos();
        break;
      case "0":
        sairDoPrograma();
        break;
      default:
        console.log("Opção inválida.");
        menu();
        break;
    }
  });
}
menu();
