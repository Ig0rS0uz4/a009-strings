//Crie a const para a frase aqui

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)

// b) Crie uma nova string a partir da primeira, trocando 
// **verde** por **rosa**, e **azul** por **laranja**;

const fraseTrocada = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(fraseTrocada)

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

let possuiVerde = fraseTrocada.includes("verde")
let possuiLaranja = fraseTrocada.includes("laranja")
console.log(`possui verde? ${possuiVerde} \npossui laranja? ${possuiLaranja}`)

// **EXTRA:** tente fazer o “mas não deixe o gato sair”
// ficar em maiúsculo, assim como o “BOAS VINDAS”

let fraseExtra = frase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log(fraseExtra)