/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 14:26
 * FINALIDADE DO PROGRAMA: PROCURAR TODOS OS PARES ENTRE 1 E 100
 */

const valorMaximo = 100;

let valorAtual = 0;

const procuraPares = (() => {

    for (let i = 1; i <= valorMaximo; i++) {

        valorAtual = i;

        if ((valorAtual % 2) == 0) {

            console.log(valorAtual);

        }

    }

})();