/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 13:29
 * FINALIDADE DO PROGRAMA: VERIFICA SE UM DIA É ÚTIL, FIM DE SEMANA OU INVÁLIDO
 */

const verificaDiaSemana = (dia) => {

    switch (dia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("DIA ÚTIL");
            break;
        case 1:
        case 7:
            console.log("FIM DE SEMANA");
            break;
        default:
            console.log("DIA INVÁLIDO");
            break;

    }

}

verificaDiaSemana(1);

verificaDiaSemana(2);

verificaDiaSemana(3);

verificaDiaSemana(4);

verificaDiaSemana(5);

verificaDiaSemana(6);

verificaDiaSemana(7);

verificaDiaSemana(8);