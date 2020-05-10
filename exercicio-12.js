/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 13:23
 * FINALIDADE DO PROGRAMA: CALCULA O FATORIAL DE QUALQUER NUMERO 
 */


const calculaFatorial = (numero) => {

    let contador = numero;

    let resultado = 1;

    for (let i = 0; i < numero; i++) {

        resultado *= contador;

        contador -= 1;

    }

    return resultado;

}

console.log(calculaFatorial(5));