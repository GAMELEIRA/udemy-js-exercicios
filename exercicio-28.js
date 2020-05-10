/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 14:52
 * FINALIDADE DO PROGRAMA: PROCURAR TODOS OS PARES E IMPARES DE UM VETOR
 */

const encontrarImparesPares = (vetor = []) => {

    let quant_pares = 0;

    let quant_impares = 0;

    vetor.forEach((valor) => {

        if ((valor % 2) == 0) {

            quant_pares += 1;

        } else {

            quant_impares += 1;

        }

    })


    console.log("QUANTIDADE DE IMPARES: " + quant_impares);

    console.log("QUANTIDADE DE PARES: " + quant_pares);

}

const vetor = [1, 12, 3];

encontrarImparesPares(vetor);