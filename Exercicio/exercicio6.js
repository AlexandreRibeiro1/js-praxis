// Dada a idade e o tipo de ingresso de uma pessoa, determine se ela pode assistir a um filme com classificação etária. A pessoa pode assistir ao filme se:
// Tiver 18 anos ou mais, ou tiver 16 ou 17 anos e possuir um ingresso do tipo "Meia".
const filme = require("readline");
const rl = filme.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function verificarAcessoAoFilme() {
  rl.question("Digite sua idade: ", (idade) => {
    rl.question(
      "Digite o tipo de ingresso (Inteira/Meia): ",
      (tipoIngresso) => {
        if (
          idade >= 18 ||
          (idade >= 16 && idade <= 17 && tipoIngresso.toLowerCase() === "meia")
        ) {
          console.log("Você pode assistir ao filme!");
        } else {
          console.log("Desculpe, você não pode assistir ao filme.");
        }
        rl.close();
      }
    );
  });
}
verificarAcessoAoFilme();
