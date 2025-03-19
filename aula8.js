//1 
//aula


//1
function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
        soma += nota;
    }
    let media = soma / 4;
    console.log("Média:", media);
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}
//2
// Chamada da função
calcularMedia();

function somaParesNoIntervalo() {
    let inicio = parseInt(prompt("Digite o início do intervalo:"));
    let fim = parseInt(prompt("Digite o fim do intervalo:"));
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    console.log("Soma dos números pares:", soma);

}

///3 
function verificarPalindromo() {
    let texto = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/ /g, "");
    let textoInvertido = texto.split("").reverse().join("");
    if (texto === textoInvertido) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

// Chamada da função
verificarPalindromo();

//4













//5
// Chamada da função
verificarPalindromo();


function contarDigitos() {
    let numero = prompt("Digite um número inteiro positivo:");
    if (/^\d+$/.test(numero)) {
        console.log("Número de dígitos:", numero.length);
    } else {
        console.log("Entrada inválida. Digite um número inteiro positivo.");
    }
}

// Chamada da função
contarDigitos();




















prompt(numerospares, "digite dois numeros")


