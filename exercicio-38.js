/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 18:20
 * FINALIDADE DO PROGRAMA: IMPRIMIR NUMEROS IMPARES
 */

const imprimirImpares = (() => {

    for (let i = 0; i <= 100; i++) {

        if ((i % 2) == 1) {

            console.log(i);

        }
    }

})();