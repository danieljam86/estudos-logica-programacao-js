/*
    2. Faça um programa que receba o ano de nascimento de uma pessoa e
o ano atual. Calcule e imprima:
    a. A idade dessa pessoa
    b. Essa idade convertida em semana
    */
   

    var readlineSync = require('readline-sync');

   //ENTRADA
   var anoNascimento = readlineSync.question("Digite o ano de seu nascimento ");
   const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

   anoNascimento = parseInt(anoNascimento);

    //PROCESSAMENTO
    var idade = anoAtual - anoNascimento;
    var idadeEmSemanas = 4 * 12 * idade;

    //SAÍDA
   console.log("Sua idade é: " + idade);
   console.log("Sua idade em semanas é: " + idadeEmSemanas);