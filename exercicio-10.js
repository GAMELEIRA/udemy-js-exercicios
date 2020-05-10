/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 13:03
 * FINALIDADE DO PROGRAMA: VERFICA SE UM NUMERO INTEIRO E DIVISIL POR 3
 */

const divisivelPorTres = (divisivel) => (divisivel % 3) == 0;

const verificaDivisivel = (numero) => {

    const resultado = divisivelPorTres(numero);

    if (resultado) {

        console.log("Divisivel");

    } else {

        console.log("Não divisivel");

    }

}

verificaDivisivel(3);

verificaDivisivel(4);