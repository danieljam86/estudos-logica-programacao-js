// faça um programa que receba a idade em: meses, Dias, minutos.

var readlineSync = require('readline-sync');

//ENTRADA
var idade = readlineSync.question("digite sua idade ");
idade = parseInt(idade);

//PROCESSAMENTO
// Meses
var idadeEmMeses = idade * 12; 
// Dias
var idadeEmDias = idade * 365;
// Horas
var idadeEmHoras = 24 * 365 * idade;
// Minutos
var idadeEmMinutos = 60 * 24 * 365 * idade;

//SAÍDA
//idade em meses
console.log('A idade em meses é: ' + idadeEmMeses + ' meses');
console.log('A idade em dias é: ' + idadeEmDias + ' meses');
console.log('A idade em horas é: ' + idadeEmHoras + ' meses');
console.log('A idade em minutos é: ' + idadeEmMinutos + ' meses');
