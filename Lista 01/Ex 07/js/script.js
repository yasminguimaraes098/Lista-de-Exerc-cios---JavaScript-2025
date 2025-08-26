r = prompt("Escolha o valor de R entre [0 - 255]")
g = prompt("Escolha o valor de G entre [0 - 255]")
b = prompt("Escolha o valor de B entre [0 - 255]")


r = Number(r)
g = Number(g)
b = Number(b)


cor = "rgb(" + r + ", " + g + ", " + b +")"


document.write("<span style='color:" + cor + ";'>Fundamentos de Web Design II</span>")

 