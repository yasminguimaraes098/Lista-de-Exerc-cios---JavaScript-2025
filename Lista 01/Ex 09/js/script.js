alert("Você está na calculadora. Siga as instruções a seguir.")

valor1 = parseFloat(prompt("Digite o primeiro valor:"))
valor2 = parseFloat(prompt("Digite o segundo valor:"))
expressao = prompt("Qual conta deseja fazer? (+, -, *, /")

resultado = "invalido";

if (expressao == "+")
    resultado = valor1 + valor2;
else if (expressao == "-")
    resultado = valor1 - valor2;
else if (expressao == "*")
    resultado = valor1 * valor2;
else if (expressao == "/") {
    if (valor2 == 0) alert("Divisão inválida")
    else resultado = valor1 / valor2;
}
else alert("Operador inválido!");

if (resultado != "invalido")
    alert(`O resultado que você procura é: ${resultado}`);