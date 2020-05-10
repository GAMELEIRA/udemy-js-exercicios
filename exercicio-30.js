/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 15:12
 * FINALIDADE DO PROGRAMA: AVALIA O MAIOR E MENOR NUMERO DE UM VETOR
 */

const avalia_numero = (vetor = []) => {

    let maior = vetor[0];

    let menor = vetor[0];

    vetor.forEach((valor) => {

        if (valor > maior) {

            maior = valor;

        }

        if (valor < menor) {

            menor = valor;

        }

    })

    console.log("Maior: " + maior);

    console.log("Menor: " + menor);

}

let vetor = [10, 2, 3, 4, 5, 6, 7, 8, 9, 10];

avalia_numero(vetor);