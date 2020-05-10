/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 14:00
 * FINALIDADE DO PROGRAMA: SIMULA A COMPRA DE UM CARRO EM UMA REVENDEDORA
 */

const comprarCarro = (carro) => {

    switch (carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso');
            break;

        case 'sedan':

        case 'motocicleta':

        case 'caminhonete':
            console.log('Têm certeza que não prefere este modelo?');
            break;

        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
            break;
    }

}

comprarCarro('hatch');

comprarCarro('sedan');

comprarCarro('motocicleta');

comprarCarro('caminhonete');

comprarCarro('ford');