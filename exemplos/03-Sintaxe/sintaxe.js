// Comentário de 1 linha
/*Bloco de comentário (Shift + ALT + a) */

// alert("Olá, mundo!");

console.log("Olá, mundo!"); // Exibido no: Inspecionar -> Console
// document.write("Olá, mundo!");

/* Variáveis
Palavras-chave: var, let e const

var -> variável de escopo global
let -> variável de escopo de bloco
const -> const de escopo de bloco
*/

const nome = "Carlos Sainz"; // Constante
let ano = 2023; // variável de escopo local
var curso = "Técnico em Desenvolvimento de sistemas"; // Variável global

// Recuperando os valores
document.write('<h2 style="color: red;">Recuperando valores e concatenação</h2><br>');
// console.log(nome); 


// 1ª Digitação (Aqui)



document.write("<strong>Meu nome é:</strong> "+nome+"<br>");
document.write("<strong>Estamos no ano :</strong> "+ano+"<br>");
document.write("<strong>Estou cursando:</strong> "+curso+"<br>");

// ______________________________________________________________________________________


// String literal/ Template String (Usando a crase)
document.write('<h2 style="color: blue;">String literal/ Template String (Usando a crase)</h2><br>');

// 2ª Digitação (Aqui)


document.write(`Eu sou <strong> ${nome} </strong>`);

// ______________________________________________________________________________________



// Operadores matemáticos
document.write('<h2 style="color: blue;">Operadores matemáticos</h2><br>');

/* Operadores matemáticos

+ adição
- subtração
/ divisão
* multiplicação

*/

let produto = 'TV Led';
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;


// 3ª Digitação (Aqui)

document.write(`A ${produto}, custa R$ ${preco}, temos ${quantidade} no estoque, e tudo sai por R$ ${total}`)