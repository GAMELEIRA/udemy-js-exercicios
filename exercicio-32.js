/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 10/05/2020
 * HORA: 14:14
 * FINALIDADE DO PROGRAMA: CONSTRUIR MÉDIA ARITIMÉTICA DOS VALORES DE UM VETOR
 */

const calcularMediaAritimetica = (numeros = []) => {

    let media = 0;

    let somaTotalNumeros = 0;

    numeros.forEach(numero => {

        somaTotalNumeros += numero;

    });

    media = somaTotalNumeros / numeros.length;

    console.log("Média: " + media);

}

const numeros = [1, 2, 3, 4];

calcularMediaAritimetica(numeros);