/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 17:56
 * FINALIDADE DO PROGRAMA: AVALIA O CONCEITO DA NOTA EM UM VETOR DE NOTAS
 */

const distribuirNota = (notas = []) => {

    notas.forEach((nota) => {

        if (nota >= 0.0 && nota <= 4.9) {

            console.log("D")

        } else if (nota >= 5.0 && nota <= 6.9) {

            console.log("C");

        } else if (nota >= 7.0 && nota <= 8.9) {

            console.log("B");

        } else {

            console.log("A");

        }

    });

}

const notas = new Array(3, 6, 7, 10);

distribuirNota(notas);