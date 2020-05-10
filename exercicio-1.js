/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS 
 * DATA: 09/05/2020
 * HORA: 20:40
 * FINALIDADE DO PROGRAMA: REALIZAR OPERACOES ARITMETICAS BASICAS 
 */

const calculadora = (primeiro_valor, segundo_valor) => {

    const soma = ((primeiro_valor = 0, segundo_valor = 0) => primeiro_valor + segundo_valor)(primeiro_valor, segundo_valor).toFixed(2);

    const subtracao = ((primeiro_valor = 0, segundo_valor = 0) => primeiro_valor - segundo_valor)(primeiro_valor, segundo_valor).toFixed(2);

    const multiplicacao = ((primeiro_valor = 0, segundo_valor = 0) => primeiro_valor * segundo_valor)(primeiro_valor, segundo_valor).toFixed(2);

    const divisao = ((primeiro_valor = 0, segundo_valor = 0) => primeiro_valor / segundo_valor)(primeiro_valor, segundo_valor).toFixed(2);

    const exibir_resultado = ((soma, subtracao, multiplicacao, divisao) => {

        const resultados = `SOMA: ${soma},\n SUBTRACAO: ${subtracao},\n MULTIPLICACAO: ${multiplicacao},\n DIVISAO: ${divisao}`

        console.log(resultados)

    })(soma, subtracao, multiplicacao, divisao);

}

calculadora(2, 3);