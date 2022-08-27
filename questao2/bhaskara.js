function delta(a,b,c) {
    let delta = (b**2) - (4 * a * c);
    return delta;
}

function botao() {
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let c = document.querySelector('#c').value;

    let resultado = document.querySelector('#resultado');
    resultado.innerText = calcular(a, b, c);
}

function calcular(a, b, c) {
    let resultadoDelta = delta(a,b,c);
    if (resultadoDelta < 0) {
        return 'DELTA NEGATIVO';
    }

    let resultadoBhaskara = bhaskara(a,b,c, resultadoDelta);
    return resultadoBhaskara;
}

function bhaskara(a, b, c, resultadoDelta) {
    let x1 = ((-b) + Math.sqrt(resultadoDelta)) / (2*a);
    let x2 = ((-b) - Math.sqrt(resultadoDelta)) / (2*a);

    return [x1, x2];
}