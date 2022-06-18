/*8Faça um programa que receba o nome, cargo e salário de um funcionário. Se ofuncionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%. Ao finalexiba o nome, o cargo e o salário desse funcionário.*/

var nome = "Cleosvaldo";
var cargo = "Jogador de Futebol";
var salario = 1000;
var acrescimo = 0;

if(salario < 1000)
    acrescimo = salario * 0.10;
    
novoSalario = salario + acrescimo;
console.log("Nome: " +nome+ " Cargo: "+cargo+ " Novo salário: "+novoSalario);