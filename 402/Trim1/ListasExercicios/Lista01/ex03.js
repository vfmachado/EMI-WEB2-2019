class Aluno {


    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        
        this.notaP1 = 0;
        this.notaP2 = 0;
        this.notaTrab = 0;
    }

    media() {
        return (this.notaP1 * 2.5 + this.notaP2 * 2.5 + this.notaTrab * 2)/7.0;
    }

    final() {
        if (this.media() >= 7) {
            return 0;
        } 

        //( media + final ) / 2 >= 5
        return 5 * 2 - this.media();
    }

}

//TESTANDO A CLASSE
let aluno01 = new Aluno("Vinicius", 12345);
aluno01.notaP1 = 8;
aluno01.notaP2 = 4;
aluno01.notaTrab = 5;

console.log("Media do aluno: " + aluno01.media());
console.log("Aluno precisa na prova final: " + aluno01.final());