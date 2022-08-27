function verificarNota() {
    let nota = document.querySelector("#nota");
    let result = document.querySelector("#resultado");
    let status = calcular(nota.value);
    result.innerText = status;
}

function calcular(nota){
    if( nota > 100 || nota < 0){
        return 'NOTA INVALIDA';
    }

    if (nota < 38) {
        return 'REPROVADO';
    }
    else if (nota < 40 ) {
        nota = 40;
    }

    if (nota >= 40) {
        return 'APROVADO';
    }
}