nota1 = parseFloat(prompt("Digite a nota do 1° bimestre"))
nota2 = parseFloat(prompt("Digite a nota do 2° bimestre"))
notaTotal = nota1 + nota2

if (notaTotal >= 60)
    alert("Você foi aprovado. Parabéns!")
else
    alert(`Você foi reprovado. Ainda faltam ${60 - notaTotal} pontos.`)