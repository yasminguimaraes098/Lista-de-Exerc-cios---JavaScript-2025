nome = prompt("Digite seu nome completo:")
totalSemEspaco = nome.replaceAll(" ", "")

qtidadeLetras = totalSemEspaco.length

document.write(`Seu nome possui ${qtidadeLetras} caracteres.`)