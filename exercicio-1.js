const calculadora = (primeiro_valor, segundo_valor) => {

    const soma = ((primeiro_valor = 0, segundo_valor = 0) => primeiro_valor + segundo_valor)(primeiro_valor, segundo_valor);

    const subtracao = ((primeiro_valor = 0, segundo_valor = 0) => primeiro_valor - segundo_valor)(primeiro_valor, segundo_valor);

    const multiplicacao = ((primeiro_valor = 0, segundo_valor = 0) => primeiro_valor * segundo_valor)(primeiro_valor, segundo_valor);

    const divisao = ((primeiro_valor = 0, segundo_valor = 0) => primeiro_valor / segundo_valor)(primeiro_valor, segundo_valor);

    console.log(soma, subtracao, multiplicacao, divisao);

}

calculadora(2, 3);