/*6Faça um programa que receba a medida em polegadas e exiba esse número emcentímetros.*/


var readlineSync = require('readline-sync');


var medPolegadas = readlineSync.question("Informe a medida em polegadas: ");
medPolegadas = parseFloat(medPolegadas);

console.log("A medida informada em polegada(s) é igual a: " + medPolegadas * 2.54 + " centímetro(s)")