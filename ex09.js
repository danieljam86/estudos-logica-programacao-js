/*9Uma empresa decide dar aumento de 30% aos funcionários cujo salário é inferior a500 reais. Escreva um programa que receba o salário de um funcionário e imprima ovalor do salário reajustado ou uma mensagem caso o funcionário não tenha direito aaumento.*/


var readlineSync = require('readline-sync');

//ENTRADA
var aumento = 0.30;
var novoSalario = 0;
var salario = readlineSync.question("digite o salário do funcionário ");
salario = parseFloat(salario);

if(salario < 500){
    novoSalario = (salario * aumento) + salario;
    console.log("O novo salário com aumento é: " + novoSalario);
}else{
    console.log("Funcionário não tem direito ao aumento");
}


