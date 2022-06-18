/*10
Elabore um programa para cálculo de preços de produtos que solicite o preço decompra do produto e o percentual a ser aplicado em cima desse valor para a venda.Calcule e exiba o preço de venda do produto. Se o percentual a ser aplicado forinferior a 50%, exiba uma mensagem informando ao usuário que o produto serávendido com uma margem muito pequena de lucro*/

var readlineSync = require('readline-sync');


var precoProduto = readlineSync.question("Informe o preço de venda: ");
precoProduto = parseFloat(precoProduto);

var percentualVenda = readlineSync.question("Informe qual é o percentual sobre a venda? ");
percentualVenda = parseFloat(percentualVenda);

var precoVenda = (precoProduto * (percentualVenda / 100)) + precoProduto;
precoVenda = parseFloat(precoVenda);

if(percentualVenda < 50)
    console.log("O produto será vendido com uma margem de lucro pequena")



console.log("O preço final de venda do produto é de: " + precoVenda)