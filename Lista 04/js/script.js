const candidatos = [
    { nome: "Jair Messias Bolsonaro", partido: "PL", imagem: "img/candidato1.png" },
    { nome: "Luís Inácio Lula da Silva", partido: "PT", imagem: "img/candidato2.png" },
    { nome: "Ciro Gomes", partido: "PDT", imagem: "img/candidato3.png" },
    { nome: "Simone Tebet", partido: "MDB", imagem: "img/candidato4.png" },
];

btnResult = document.getElementById("btnResult");



function resultadoFinal() {
    // sorteia o índice do primeiro candidato
    const indice1 = Math.floor(Math.random() * candidatos.length);

    // sorteia o segundo
    let indice2 = Math.floor(Math.random() * candidatos.length);

    // se sair igual, ajusta com if/else (sem usar while)
    if (indice2 === indice1) {
        if (indice1 === candidatos.length - 1) {
            indice2 = 0;
        } else {
            indice2 = indice1 + 1;
        }
    }
}

btnResult.addEventListener("click", resultadoFinal);