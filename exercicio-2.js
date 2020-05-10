/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 09/05/2020
 * HORA: 20:53
 * FINALIDADE DO PROGRAMA: REALIZAR OPERACOES ARITMETICAS BASICAS 
 */

class Triangulo {

    constructor(primeiro_lado, segundo_lado, terceiro_lado) {

        this.primeiro_lado = primeiro_lado,

            this.segundo_lado = segundo_lado,

            this.terceiro_lado = terceiro_lado

    }

}

const tipo_triangulo = {

    RETANGULO: 'RETANGULO',

    ISOSCELES: 'ISOSCELES',

    ESCALENO: 'ESCALENO'

}

const identificarTipoTriangulo = (triangulo) => {

    let { primeiro_lado, segundo_lado, terceiro_lado } = triangulo;

    const medidas = new Array(primeiro_lado, segundo_lado, terceiro_lado);

}

const triangulo = new Triangulo(1, 2, 3);

identificarTipoTriangulo(triangulo);