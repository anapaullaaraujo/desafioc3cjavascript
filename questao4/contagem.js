function gerarContagem(tamanho){
    let lista = [];
    for (let i = 1; i <= tamanho; i++){
        lista.push(i);
    }
    
    return lista;
}

function gerarNovaLista(tamanho) {
    let lista = gerarContagem(tamanho);

    let novaLista = [];
    for(let i = 0; i < lista.length; i++){
        let numero = lista[i];
        if (numero % 5 == 0 && numero % 9 == 0 ) {
            numero = 'LuidyMoura';
        }
        else if (numero % 5 == 0) {
            numero = 'Luidy';
        }
        else if (numero % 9 == 0) {
            numero = 'Moura';
        }
        novaLista.push(numero);
    }

    return novaLista;
}

function botao(){
    let tamanho = document.querySelector("#valor").value;
    let contagem = document.querySelector("#contagem");
    let novaLista = gerarNovaLista(tamanho);
    
    contagem.innerText = novaLista.toString();
}