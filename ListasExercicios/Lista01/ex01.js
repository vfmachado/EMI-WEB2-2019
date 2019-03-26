//FUNÇÃO COM ARROW FUNCTION
const imparesEntre = (a, b) => {

    //LET - VARIÁVEIS LOCAIS
    for (let i = a; i <= b; i++) {
        //TESTE PARA O RESTO DA DIVISÃO
        if (i % 2 != 0) { 
            console.log(i);
        }
    }

}

//TESTANDO
imparesEntre(2, 9);