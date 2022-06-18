/*
    4. Faça um programa que receba o nome, o peso e a altura de uma
        pessoa. Calcule e imprima o nome e o IMC dessa pessoa. 
        IMC = peso / (altura * altura).
    */
    
    // ENTRADA
    var nome = prompt("Digite seu nome");
    var peso = parseFloat( prompt("Digite seu peso") );
    var altura = parseFloat( prompt("Digite sua altura em metros.") );

    //PROCESSAMENTO
    //calcular o imc
    var imc = peso / (altura * altura);

    //SAÍDA
    //apresenta o resultado com apenas 1 casa decimal
    var txtResultado = nome + ", seu imc é: " + imc.toFixed(1);

    alert( txtResultado );