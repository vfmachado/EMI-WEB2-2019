
console.log("Hello World... I'm using NodeJS!!!");

//declaração de variável (usando let)
let x = 0;
console.log(x);

//é permitido e muito usado
const vetor = [1, 2, 3];
vetor[2] = 5;
console.log(vetor);

//função que retorna o maior dentre 2 números
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//ARROW FUNCTION
const max1 = (a, b) => {
    //operador ternário
    return a > b ? a : b;
}

//ISTO TAMBÉM É UMA FUNÇÃO - ARROW FUNCTION
const addOne = a => a + 1;

const getNumero = () => 7;

console.log(max(2, 5));
console.log(max1(10, 8));

console.log("Terminei...");