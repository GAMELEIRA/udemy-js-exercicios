const exibirDinheiro = (numero) => {

    let valor_formatado = numero.toFixed(2).toString().replace('.', ',');

    let template = `R$ ${valor_formatado}`;

    console.log(template);

}

exibirDinheiro(0.1 + 0.2);