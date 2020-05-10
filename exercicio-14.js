/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 13:45
 * FINALIDADE DO PROGRAMA: VERIFICA SE EXISTE UMA FRUTA NO HORTIFRUT
 */

const verficaExistenciaFruta = (nome_fruta) => {

    switch (nome_fruta) {

        case 'maça':
            console.log("Não vendemos esta fruta aqui!");
            break;
        case 'kiwis':
            console.log("Estamos com escassez de kiwis");
            break;
        case 'melância':
            console.log("Aqui está, são 3 reais o quilo");
            break;
        default:
            console.log("ERRO")
            break;
    }
}

verficaExistenciaFruta('maça');

verficaExistenciaFruta('kiwis');

verficaExistenciaFruta('melância');

verficaExistenciaFruta('banana');