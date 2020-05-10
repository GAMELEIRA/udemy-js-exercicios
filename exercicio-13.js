/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 13:29
 * FINALIDADE DO PROGRAMA: VERIFICA SE UM DIA É ÚTIL 
 */

const verificaDiaSemana = (dia) => {

    switch (dia) {
        case 1:
            console.log("SEGUNDA");
            break;
        case 2:
            console.log("TERÇA");
            break;
        case 3:
            console.log("QUARTA");
            break;
        case 4:
            console.log("QUINTA");
            break;
        case 5:
            console.log("SEXTA");
            break;
        case 6:
            console.log("SÁBADO");
            break;
        case 7:
            console.log("DOMINGO");
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