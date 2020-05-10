const divisao = (dividendo, divisor) => {

    const resultado = dividendo / divisor;

    const sobrou = dividendo % divisor;

    const imprimir = (() => console.log(`O resultado da expressão dividendo ${dividendo} pelo dividor ${divisor} é ${resultado}. E o resto da divisão é ${sobrou}.`))();

}

divisao(1, 1);