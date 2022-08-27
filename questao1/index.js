function consultarAngulos(){
    let ang1 = document.getElementById('ang1');
    let ang2 = document.getElementById('ang2');
    let ang3 = document.getElementById('ang3');

    let resposta = classificarTriangulo(ang1.value, ang2.value, ang3.value);
    
    let span = document.getElementById('resposta');
    span.innerText = resposta;
}

function classificarTriangulo(ang1, ang2, ang3){
   if(!ang1 || !ang2 || !ang3){
        return 'É preciso preencher todos os campos para classificar o triângulo.';
    }
    else {
        if(ang1 == ang2 && ang2 == ang3){
            return 'Equilátero';
        }
        else if(ang1 == ang2 || 
                ang2 == ang3 ||
                ang1 == ang3 ){
            return 'Isósceles';
        }
        else{
            return 'Escaleno';
        }
    }
}