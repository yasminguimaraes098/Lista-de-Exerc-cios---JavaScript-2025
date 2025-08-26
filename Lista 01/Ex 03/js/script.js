nome = prompt("Digite seu nome completo:")
idade = prompt("Agora digite sua idade:")

if (idade >= 18)
    alert(`${nome}, você POSSUI idade para tirar carteira. Parabéns!`)
else
    alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira. Ainda faltam ${18 - idade} anos.`)