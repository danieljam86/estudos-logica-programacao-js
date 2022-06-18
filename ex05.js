//Faça um programa que receba o nome, cargo e salário de um funcionário. Calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o novo salário desse funcionário.

var nome    = prompt("Informe seu nome");
    var cargo   = prompt("Qual é o seu cargo?");
    var salario = parseFloat( prompt("Qual é o seu salário?") );

    //processamento
    var novoSalario = ((salario / 100) * 10) + salario;

    //saída
    alert("Seu novo salário é: " + novoSalario);