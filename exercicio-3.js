const calcularExpoente = (base, expoente) => {

    let resultado = 1;

    for (let i = 0; i < expoente; i++) {

        resultado *= base;

    }

    console.log(resultado);

    return resultado;

}

const exibir_resultado = (resultado) => console.log(resultado);

exibir_resultado(calcularExpoente(10, 2));