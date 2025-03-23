
//1
function somadamatriz(matriz1, matriz2) {
    let matriz3 = [];
  for (let i = 0; i < matriz1.length; i++) {  
  matriz3[i] = []; 
  for (let j = 0; j < matriz1[i].length; j++) {  
     matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
}}
return matriz3;
}
let matriz1 = [[1, 2, 3], [6, 7, 8], [9, 10, 11]];
let matriz2 = [[11, 12, 13], [14, 15, 16], [18, 19, 20]];

let resultado1 = somadamatriz(matriz1, matriz2);

console.log(resultado);


//2

function transposicao(matriz) {
  let linhas = matriz.length;
  let colunas = matriz[0].length;
  let matrizTransposta = [];

  for (let j = 0; j < colunas; j++) {
      matrizTransposta[j] = [];
  for (let i = 0; i < linhas; i++) {
     matrizTransposta[j][i] = matriz[i][j];
      }
  }

  return matrizTransposta;
}

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let resultado3 = transposicao(matriz);

console.log(resultado);

//3

function multiplicarMatrizes(matriz1, matriz2) {
  let matriz3 = [];

  for (let i = 0; i < matriz1.length; i++) {  
      matriz3[i] = []; 
      for (let j = 0; j < matriz1[i].length; j++) {  
          matriz3[i][j] = matriz1[i][j] * matriz2[i][j]; // Multiplicação
      }
  }

  return matriz3;
}

let matriz12 = [[1, 2, 3], [6, 7, 8], [9, 10, 11]];
let matriz23 = [[11, 12, 13], [14, 15, 16], [18, 19, 20]];

let resultado2 = multiplicarMatrizes(matriz1, matriz2);

console.log(resultado2);

//4

//5

let tabuleiro = [
  ["null","1","null"],
  ["null","null","null"],
  ["null","null","null"],
]
// Função para o comando de atirar em uma posição
function cordenadas (linha, coluna) {
  if (tabuleiro[linha][coluna] === '1') {
    console.log('Você acertou o numero Parabens!');
    tabuleiro[linha][coluna] = 'Acerto';
  } else {
    console.log("null.");
    tabuleiro[linha][coluna] = 'Erro';
  }
}
cordenadas(0,1);
cordenadas(1,2);

//6

function matrizIdentidade(n) {
  let matriz = [];
for (let i = 0; i < n; i++) {
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
        matriz[i][j] = (i === j) ? 1 : 0;
  }}

  return matriz;
}


let identidade4x4 = matrizIdentidade(4);
console.log(identidade4x4);

//7


function rotacionarMatriz90(matriz) {
  let n = matriz.length;
  let matrizRotacionada = [];

  for (let i = 0; i < n; i++) {
    matrizRotacionada[i] = [];
  for (let j = 0; j < n; j++) {
    matrizRotacionada[i][j] = matriz[n - j - 1][i]; 
 }}

  return matrizRotacionada;
}
let matriz4 = [
  [5, 2, 8],
  [1, 7, 3],
  [9, 6, 4]
];
let matrizRotacionada = rotacionarMatriz90(matriz);
console.log(matrizRotacionada);

//8


function somaBorda(matriz) {
  let n = matriz.length;
  let soma = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
  if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
    soma += matriz[i][j];
  
  
}}}

  return soma;
}

// Exemplo de matriz 4x4
let matriz8 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

let resultado = somaBorda(matriz);
console.log("Soma da borda:", resultado);