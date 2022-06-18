/*
7. Faça um programa que receba o nome, cargo e salário de um
funcionário. Calcule o salário acrescido de 10%. Ao final exiba o nome,
o cargo e o novo salário desse funcionário.
*/

var nome = "Cleosvaldo";
var cargo = "Jogador de Futebol";
var salario = 10000;

var acrescimo = salario * 0.10;

var novoSalario = salario + acrescimo;

console.log("Nome: " +nome+ " Cargo: "+cargo+ " Novo salário: "+novoSalario);