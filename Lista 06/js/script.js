window.addEventListener('load', function () {

    //etapa 1 - vetor para as 27 cartas
    const vetorCartas = Array.from({ length: 27 }, (_, i) => i + 1);

    console.log(vetorCartas);

    for (let i = 0; i < vetorCartas.length; i++) {
        console.log(`${i}:${vetorCartas[i]}`);
    }

    //etapa 2 - faz o sorteio de 4 cartas diferentes e duplica elas
    const cartasSorteadas = vetorCartas.sort(() => Math.random() - 0.5).slice(0, 4);

    let vetorPares = [];
    for (let i = 0; i < cartasSorteadas.length; i++) {
        vetorPares.push(cartasSorteadas[i]);
        vetorPares.push(cartasSorteadas[i]);
    }

    console.log(vetorPares);

    for (let i = 0; i < vetorPares.length; i++) {
        console.log(`${i}:${vetorPares[i]}`);
    }

    //etapa 3 - embaralha as cartas dentro do vetor de pares
    let vetorParesEmbaralhados = vetorPares.sort(() => Math.random() - 0.5);

    console.log(vetorParesEmbaralhados);

    for (let i = 0; i < vetorParesEmbaralhados.length; i++) {
        console.log(`${i}:${vetorParesEmbaralhados[i]}`);
    }

    //etapa 4 - exibe as cartas
    const board = document.getElementById("imagens");

    for (let i = 0; i < vetorParesEmbaralhados.length; i++) {
        const idCarta = vetorParesEmbaralhados[i];
        const img = document.createElement("img");
        img.src = `img/carta${idCarta}.png`; 
        img.alt = `Carta ${idCarta}`;
        img.width = 100; 
        board.appendChild(img);
    }

})
